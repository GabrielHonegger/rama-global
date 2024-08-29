import { Resend } from "resend";
import { NextResponse } from "next/server";
import BudgetEmail from "@/emails/BudgetEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, phone, company, cnpj, employeesNumber, address, city, state, 
        branches, anotherCertificate, outsource, message } = await request.json()

    try {
        await resend.emails.send({
            from: 'contato@ramaglobal.com.br',
            to: 'contato@ramaglobal.com.br',
            subject: 'Nova Solicitação de Orçamento - Rama Global',
            react: BudgetEmail({ name, email, phone, company, cnpj, employeesNumber, address, city, state, 
                branches, anotherCertificate, outsource, message })
          });
        
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error);

        return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
    }
}