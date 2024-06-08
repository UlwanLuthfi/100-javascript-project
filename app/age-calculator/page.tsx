'use client';
import { useState } from 'react';

export default function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const handleCalculate = () => {
    if (!dateOfBirth) return;

    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
      <div className="flex flex-col gap-5 w-[350px]">
        <div className="flex p-5 gap-5 rounded-md bg-black shadow-xl">
          <input
            type="date"
            className="w-full px-5 py-3 rounded-md focus:outline-none"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <button
            className="bg-white px-5 py-3 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>

        <div className="flex gap-5 justify-between">
          <div className="flex flex-col w-24 h-24 gap-1 items-center justify-center rounded-md bg-black text-white shadow-xl">
            <span className="text-2xl font-bold">{age.years}</span>{' '}
            <span className="text-sm text-slate-500">years</span>
          </div>

          <div className="flex flex-col w-24 h-24 gap-1 items-center justify-center rounded-md bg-black text-white shadow-xl">
            <span className="text-2xl font-bold">{age.months}</span>{' '}
            <span className="text-sm text-slate-500">months</span>
          </div>

          <div className="flex flex-col w-24 h-24 gap-1 items-center justify-center rounded-md bg-black text-white shadow-xl">
            <span className="text-2xl font-bold">{age.days}</span>{' '}
            <span className="text-sm text-slate-500">days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
