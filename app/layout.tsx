import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {children}
      </body>
    </html>
  );
}
