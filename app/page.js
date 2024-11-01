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

  if (surahs.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Surah List</h1>
      <ul className="space-y-4">
        {surahs.map(surah => (
          <li key={surah.number} className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition duration-150">
            <Link href={`/surah/${surah.number}`}>
              <a className="text-blue-500 hover:underline">{surah.englishName} - {surah.englishNameTranslation}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
