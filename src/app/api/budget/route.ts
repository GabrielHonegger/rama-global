import { Resend } from "resend";
import { NextResponse } from "next/server";
import BudgetEmail from "@/emails/BudgetEmail";
import { z } from "zod";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const { window } = new JSDOM("");
const purify = DOMPurify(window);

const allowedOrigin = process.env.NODE_ENV === 'production'
  ? 'https://ramaglobal.com.br'
  : '*';

const formSchema = z.object({
    name: z.string()
        .min(1, { message: "Nome é obrigatório" })
        .min(2, { message: "Nome precisa conter pelo menos 2 caracteres" })
        .max(30, { message: "Digite apenas o primeiro nome" }),

    email: z.string()
        .min(1, { message: "Email é obrigatório" })
        .email({ message: "Insira um email válido" }),
        
    phone: z.string(),
    certificate: z.enum(['FSC', 'PEFC', "ESG", "Rotulo-Ecologico", "Mais-de-Um", "Nao-Sei", ""]),
    company: z.string(),
    cnpj: z.string(),
    employeesNumber: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    branches: z.enum(['Sim', 'Não', "Sem Resposta"]),
    anotherCertificate: z.enum(['Sim', 'Não', "Sem Resposta"]),
    outsource: z.enum(['Sim', 'Não', "Sem Resposta"]),
    message: z.string().max(500, {
        message: "Mensagem pode conter no máximo 500 caracteres"
    }),
    csrfToken: z.string(),
    captcha: z.string(),
  })

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const contentType = request.headers.get("Content-Type");

    const responseHeaders = new Headers();
    responseHeaders.set('Access-Control-Allow-Origin', allowedOrigin);
    responseHeaders.set('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allowed methods
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
        
    if (contentType !== "application/json") {
        return NextResponse.json(
            { error: "Invalid Content-Type, Expected 'application/json'" },
            { status: 415 } // 415 Unsupported Media Type
        );
    }

    try {
        const requestBody = await request.json();

        const cookies = request.headers.get('cookie') || '';
        const csrfTokenCookie = cookies.split('; ').find(row => row.startsWith('csrfToken='))?.split('=')[1];

        if (!csrfTokenCookie || csrfTokenCookie !== requestBody.csrfToken) {
            return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
        }

        const validatedData = formSchema.parse(requestBody);

        if (!validatedData.captcha) {
            return NextResponse.json(
                { error: 'Unprocessable request, please provide the required fields'},
                { status: 422 })
        }

        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?
        secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${validatedData.captcha}`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            method: "POST",
        })

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Unprocessable request, invalid captcha token'},
                { status: 422 })
        }

        const sanitizedData = {
            name: purify.sanitize(validatedData.name),
            email: purify.sanitize(validatedData.email),
            phone: purify.sanitize(validatedData.phone),
            certificate: purify.sanitize(validatedData.certificate),
            company: purify.sanitize(validatedData.company),
            cnpj: purify.sanitize(validatedData.cnpj),
            employeesNumber: purify.sanitize(validatedData.employeesNumber),
            address: purify.sanitize(validatedData.address),
            city: purify.sanitize(validatedData.city),
            state: purify.sanitize(validatedData.state),
            branches: purify.sanitize(validatedData.branches),
            anotherCertificate: purify.sanitize(validatedData.anotherCertificate),
            outsource: purify.sanitize(validatedData.outsource),
            message: purify.sanitize(validatedData.message),
        }

        await resend.emails.send({
            from: 'contato@ramaglobal.com.br',
            to: 'contato@ramaglobal.com.br',
            subject: 'Nova Solicitação de Orçamento - Rama Global',
            react: BudgetEmail(sanitizedData)
          });
          return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { headers: responseHeaders }
            );
    } catch (error) {
        console.error(error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation failed.", issues: error.errors },
                { status: 400, headers: responseHeaders }
            )
        }

        return NextResponse.json(
            { error: "Something went wrong." }, { status: 500, headers: responseHeaders }
        );
    }
}

export async function OPTIONS(request: Request) {
    const response = new Response(null, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
  }