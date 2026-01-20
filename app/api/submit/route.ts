import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const { name, phone } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  await supabase.from('leads').insert([{ name, phone }]);

  return NextResponse.json({ success: true });
}
