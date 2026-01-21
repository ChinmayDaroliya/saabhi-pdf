'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

      // OPEN PDF FIRST (user gesture)
    window.open('/saabhi.pdf', '_blank');

    setLoading(true);

    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone }),
    });

    setLoading(false);

    // window.open('/saabhi.pdf', '_blank');
  }

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white shadow-md relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <img
            src="/logo.svg"
            alt="SAABHI"
            className="h-10"
          />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main
        className="min-h-[calc(100vh-72px)] flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />
        {/* {content} */}
        <div className="relative z-10 w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 w-full max-w-sm shadow-2xl rounded-2xl relative z-10 border border-black/10"
        >
          <h2 className="text-center text-lg font-semibold text-green-800 mb-4">
            Get Your Free Ayurveda Guide
          </h2>

          <input
            required
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            required
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Mobile Number"
            className="w-full border rounded-lg px-4 py-2 mb-4"
            value={phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              if (value.length <= 10) setPhone(value);
            }}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-900 transition"
          >
            {loading ? 'Please wait...' : 'Download PDF'}
          </button>
        </form>
        </div>
      </main>
    </>
  );
}
