import Message from "@/emails/Message";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, message } = await request.json()

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // ramaglobal email
            to: 'gabrielhonegger132@gmail.com', // ramaglobal email
            subject: 'Novo Contato - Rama Global',
            react: Message({ name, email, message })
          });
        
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error);

        return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
    }
}