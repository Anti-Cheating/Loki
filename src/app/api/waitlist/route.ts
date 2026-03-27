import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email } = body;

    // Validate required fields
    if (!name || !company || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, company, email' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get backend URL from environment
    const backendUrl = process.env.BACKEND_URL;
    console.log('BACKEND_URL:', backendUrl);
    if (!backendUrl) {
      console.error('BACKEND_URL environment variable not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Forward to backend service
    const fullUrl = `${backendUrl}/api/waitlist`;
    console.log('Forwarding to:', fullUrl);
    const backendResponse = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, company, email }),
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json().catch(() => ({}));
      console.error('Backend error:', errorData);
      return NextResponse.json(
        { error: errorData.error || 'Failed to join waitlist' },
        { status: backendResponse.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
