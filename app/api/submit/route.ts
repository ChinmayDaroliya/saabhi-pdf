// import { NextResponse } from 'next/server';
// import { supabase } from '@/lib/supabase';

// export async function POST(req: Request) {
//   const { name, phone } = await req.json();

//   if (!name || !phone) {
//     return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
//   }

//   await supabase.from('leads').insert([{ name, phone }]);

//   return NextResponse.json({ success: true });
// }

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, phone } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const id = crypto.randomUUID(); // generate id
  const created_at = new Date().toISOString(); // timestamp

  await fetch('https://sheetdb.io/api/v1/96s56d9acze2x?sheet=english', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          id,
          name,
          number: phone,
          created_at,
        },
      ],
    }),
  });

  return NextResponse.json({ success: true });
}