"use client";
import { useEffect } from 'react';

function HomePage() {
  const fetchData = async () => {
    try {
      const res = await fetch('/api/data', {
        headers: {
          'db-api-key': process.env.NEXT_PUBLIC_MONGO_API_KEY, 
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div>
      Soy el home
    </div>
  );
}

export default HomePage;
