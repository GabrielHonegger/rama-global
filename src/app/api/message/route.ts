import Message from "@/emails/Message";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const contentType = request.headers.get("Content-Type");
    
    if (contentType !== "application/json") {
        return NextResponse.json(
            { error: "Invalid Content-Type, Expected 'application/json'" },
            { status: 415 } // 415 Unsupported Media Type
        );
    }
    
    const { name, email, message } = await request.json()

    try {
        await resend.emails.send({
            from: 'contato@ramaglobal.com.br',
            to: 'contato@ramaglobal.com.br',
            subject: 'Novo Contato - Rama Global',
            react: Message({ name, email, message })
          });
        
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error);

        return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
    }
}