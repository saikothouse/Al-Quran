export const metadata = {
  title: 'Al Quran App',
  description: 'An Al Quran app built with Next.js, Tailwind CSS, and the Quran API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-500 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">Al Quran App</h1>
          </div>
        </header>
        <main className="container mx-auto p-6">
          {children}
        </main>
        <footer className="bg-blue-500 text-white p-4 mt-6">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} Al Quran App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
