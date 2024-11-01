"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SurahDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.alquran.cloud/v1/surah/${id}`)
        .then(response => response.json())
        .then(data => setSurah(data.data));
    }
  }, [id]);

  if (!surah) return <div className="text-center mt-12">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{surah.englishName}</h1>
      <p className="text-xl mb-4 text-gray-700">{surah.englishNameTranslation}</p>
      <div className="space-y-6">
        {surah.ayahs.map(ayah => (
          <p key={ayah.number} className="bg-white shadow-md rounded-lg p-4 text-gray-800 leading-relaxed">
            {ayah.text}
          </p>
        ))}
      </div>
    </div>
  );
}
