// app/api/csrf-token/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
    const csrfToken = crypto.randomBytes(32).toString('hex'); // Generate a random token

    // Store the token in session storage, database, or in-memory store for validation on form submission
    // For simplicity, we'll just send it back to the client
    return NextResponse.json({ csrfToken });
}
