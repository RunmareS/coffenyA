import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col bg-amber-50 text-gray-800">
        <header className="bg-amber-900 text-white p-4">
          <nav className="container mx-auto flex gap-6">
            <Link href="/">Главная</Link>
            <Link href="/menu">Меню</Link>
            <Link href="/about">О нас</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

        <footer className="bg-amber-900 text-white p-4 text-center">
          © 2026 Coffee House
        </footer>
      </body>
    </html>
  );
}