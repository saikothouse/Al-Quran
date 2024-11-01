"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(response => response.json())
      .then(data => setSurahs(data.data));
  }, []);

  if (surahs.length === 0) return <div className="text-center mt-12">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Al Quran Surah List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {surahs.map(surah => (
          <li key={surah.number} className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-150">
            <Link href={`/surah/${surah.number}`}>
              <a className="text-blue-600 hover:underline text-xl font-semibold block">{surah.englishName}</a>
            </Link>
            <p className="text-gray-600">{surah.englishNameTranslation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
