import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import Review from '../../../models/Review';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const review = await Review.create(body);
    return NextResponse.json(review, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: 'Error creating review' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const reviews = await Review.find().sort({ createdAt: -1 });
    return NextResponse.json(reviews);
  } catch {
    return NextResponse.json(
      { message: 'Error fetching reviews' },
      { status: 500 }
    );
  }
}
