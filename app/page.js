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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Surah List</h1>
      <ul>
        {surahs.map(surah => (
          <li key={surah.number} className="mt-2">
            <Link href={`/surah/${surah.number}`}>
              <a className="text-blue-500">{surah.englishName} - {surah.englishNameTranslation}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
