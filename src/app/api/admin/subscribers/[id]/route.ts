import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Subscriber from '@/models/Subscriber';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { status } = await req.json();
    
    const subscriber = await Subscriber.findByIdAndUpdate(
      params.id,
      { status },
      { new: true }
    );

    if (!subscriber) {
      return NextResponse.json({ 
        success: false, 
        message: 'Subscriber not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      subscriber 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update status',
      error: error.message 
    }, { status: 500 });
  }
}
