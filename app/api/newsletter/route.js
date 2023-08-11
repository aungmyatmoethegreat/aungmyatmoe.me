import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        await fetch(
            `${process.env.CONVERTKIT_API_URL}/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
            {
                body: JSON.stringify({
                    api_key: process.env.CONVERTKIT_API_KEY,
                    email: request.body.get('email')
                })
            }
        );
        return NextResponse.json({ status: 'subscribed' });
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            error: error.message || error.toString()
        });
    }
}
