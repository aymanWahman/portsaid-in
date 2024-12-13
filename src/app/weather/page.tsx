// src/app/weather/FetchWeather.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { WeatherType } from '../../Types/WeatherType';

const FetchWeather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const city = 'Port Said'; // المدينة التي تريد الحصول على الطقس لها
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        const res = await fetch(apiUrl);
        
        if (!res.ok) throw new Error('Failed to fetch weather data');
        const data = await res.json();
        
        setWeather({
          temperature: data.main.temp,
          description: data.weather[0].description,
          condition: data.weather[0].main,
        });
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Error:', err);
          setError('Failed to fetch weather data');
        } else {
          console.error('An unknown error occurred');
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className='text-xl text-seaBlue mb-5'>الطقس الحالي في بورسعيد</h1>
      <p>درجة الحرارة: {weather?.temperature}°C</p>
      <p>الوصف: {weather?.description}</p>
      <p>الحالة: {weather?.condition}</p>
    </div>
  );
};

export default FetchWeather;
