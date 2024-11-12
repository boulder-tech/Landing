// app/api/waitlist/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Parse the incoming request body
        const body = await request.json();
        const { email } = body;

        if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
        }

        // Make the request to the Strapi backend
        const strapiResponse = await fetch('https://devapi.bouldertech.fi/api/wait-list/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!strapiResponse.ok) {
            const errorText = await strapiResponse.text();
            console.error('Error en la solicitud a Strapi:', errorText);
            return NextResponse.json({ error: 'Failed to save email to Strapi' }, { status: 500 });
        }

        const result = await strapiResponse.json();

        // Return a success response
        return NextResponse.json({ success: true, data: result }, { status: 200 });
    } catch (error) {
        console.error('Error en el servidor:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
