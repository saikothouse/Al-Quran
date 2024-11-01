// app/layout.js
import './globals.css';

export const metadata = {
  title: "Al Quran App",
  description: "A beautiful Quran web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
