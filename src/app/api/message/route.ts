import Message from "@/emails/Message";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

// Setup DOMPurify to work in Node.js
const { window } = new JSDOM("");
const purify = DOMPurify(window);

const formSchema = z.object({
    name: z.string().min(2).max(30),
    email: z.string().email(),
    message: z.string().min(3).max(500),
  });

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const contentType = request.headers.get("Content-Type");

    const responseHeaders = new Headers();
    responseHeaders.set('Access-Control-Allow-Origin', 'https://ramaglobal.com.br');
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

        const validatedData = formSchema.parse(requestBody)

        const sanitizedData = {
            name: purify.sanitize(validatedData.name),
            email: purify.sanitize(validatedData.email),
            message: purify.sanitize(validatedData.message)
        }

        await resend.emails.send({
            from: 'contato@ramaglobal.com.br',
            to: 'contato@ramaglobal.com.br',
            subject: 'Novo Contato - Rama Global',
            react: Message(sanitizedData)
          });
        
        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { headers: responseHeaders })
    } catch (error) {
        console.error(error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation failed.", issues: error.errors },
                { status: 400, headers: responseHeaders }
            )
        }

        return NextResponse.json({ error: "Something went wrong." }, { status: 500, headers: responseHeaders })
    }
}

export async function OPTIONS(request: Request) {
    const response = new Response(null, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', 'https://ramaglobal.com.br');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
  }