// app/page.js
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [quranData, setQuranData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuranData = async () => {
      try {
        const response = await fetch('https://api.alquran.cloud/v1/quran/ar.alafasy');
        if (!response.ok) {
          throw new Error('Failed to fetch Quran data');
        }
        const data = await response.json();
        setQuranData(data.data); // Adjust based on the API response structure
      } catch (err) {
        setError(err.message);
      }
    };
    getQuranData();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Al Quran</h1>
      <div className="grid grid-cols-1 gap-4">
        {quranData && quranData.surahs.map((surah, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{surah.englishName}</h2>
            <p className="text-sm text-gray-600">{surah.englishNameTranslation}</p>
            <ul>
              {surah.ayahs.map((ayah, ayahIndex) => (
                <li key={ayahIndex} className="text-lg">{ayah.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
