// pages/index.tsx
"use client";
import React, { useEffect, useState } from 'react';

interface WeatherData {
  temperature: number;
  description: string;
}

const WeatherPage: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = '7486b0859e648d7952fade9ed44313c5'; // استبدل بـ API Key الخاص بك
      const city = 'Port Said'; // المدينة التي تريد الحصول على الطقس لها
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!res.ok) throw new Error('Failed to fetch weather data');
        const data = await res.json();
        setWeather({
          temperature: data.main.temp,
          description: data.weather[0].description,
        });
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error('An unknown error occurred');
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
    <div dir="rtl">
      <h1>مرحبًا بك في بورسعيد</h1>
      <h2>الطقس الحالي</h2>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>درجة الحرارة: {weather?.temperature}°C</span>
        <span>Temperature: {weather?.temperature}°C</span>
      </p>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>الوصف: {weather?.description}</span>
        <span>Description: {weather?.description}</span>
      </p>
    </div>
  );
};

export default WeatherPage;