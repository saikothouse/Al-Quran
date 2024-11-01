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
    <div className="p-6">
      <h1 className="text-2xl font-bold">{surah.englishName}</h1>
      <p className="text-lg mb-4">{surah.englishNameTranslation}</p>
      {surah.ayahs.map(ayah => (
        <p key={ayah.number} className="mt-4">{ayah.text}</p>
      ))}
    </div>
  );
}
