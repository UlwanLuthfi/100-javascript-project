'use client';

import { CloudyIcon, DropletIcon, SearchIcon, WindIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WeatherApp() {
  type WeatherData = {
    location: {
      name: string;
      region: string;
      country: string;
      lat: number;
      lon: number;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
    };
    current: {
      temp_c: number;
      is_day: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      wind_kph: number;
      humidity: number;
      cloud: number;
      feelslike_c: number;
      uv: number;
    };
  };

  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [location, setLocation] = useState<string>('auto:ip');
  const currentDate = new Date();
  const currentDayString = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const currentMonthString = currentDate.toLocaleString('default', {
    month: 'long',
  });
  const currentYearString = currentDate.getFullYear();
  const currentTimeString = currentDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const fetchWeatherData = async (location: string = 'auto:ip') => {
    const weatherData = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${location}&key=c01152b6b6354382b9f35424242606`
    );
    const weatherDataJson = await weatherData.json();
    setWeatherData(weatherDataJson);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeatherData(location);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center max-w-[800px] mx-auto">
      <div className="flex flex-col w-full p-5 gap-5">
        <div className="flex flex-col h-full">
          <span className="text-xl font-bold">
            {currentMonthString} {currentYearString}
          </span>
          <span className="text-gray-400">{currentDayString}</span>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex h-full items-center bg-slate-50 p-3 rounded-md">
            <SearchIcon className="text-gray-400" />
            <input
              type="text"
              name="location"
              placeholder="Search location here..."
              onChange={(e) => setLocation(e.target.value)}
              className="placeholder:text-gray-400 bg-slate-50 focus:outline-none focus:ring-0 focus:border-transparent border-transparent block w-full px-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </form>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-4xl">{weatherData?.location?.name}</span>
              <div className="flex text-xs text-gray-400 gap-1">
                <span>{weatherData?.location?.region},</span>
                <span>{weatherData?.location?.country}</span>
              </div>
            </div>
            <span className="text-2xl">{currentTimeString}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 text-4xl">
              <span>{weatherData?.current?.temp_c}</span>
              <span>°C</span>
            </div>
            <div className="flex flex-col text-sm">
              <span>{weatherData?.current?.condition?.text}</span>
              <span>Feels like {weatherData?.current?.feelslike_c} °C</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center bg-slate-50 p-5 gap-3 w-fit rounded-md">
              <WindIcon />
              <div>
                <span className="text-xs">Wind Speed</span>
                <div className="text-2xl">
                  <span>{weatherData?.current?.wind_kph}</span>
                  <span> km/h</span>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-slate-50 p-5 gap-3 w-fit rounded-md">
              <DropletIcon />
              <div>
                <span className="text-xs">Humidity</span>
                <div className="text-2xl">
                  <span>{weatherData?.current?.humidity}</span>
                  <span>%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-slate-50 p-5 gap-3 w-fit rounded-md">
              <CloudyIcon />
              <div>
                <span className="text-xs">Cloud Coverage</span>
                <div className="text-2xl">
                  <span>{weatherData?.current?.cloud}</span>
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
