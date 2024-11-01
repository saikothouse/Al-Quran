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

  if (!surah) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{surah.englishName}</h1>
      <p className="text-lg mb-4">{surah.englishNameTranslation}</p>
      <div className="space-y-4">
        {surah.ayahs.map(ayah => (
          <p key={ayah.number} className="bg-white shadow-md rounded-lg p-4">
            {ayah.text}
          </p>
        ))}
      </div>
    </div>
  );
}
