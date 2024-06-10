'use client';

import { UtensilsIcon, SmilePlusIcon, ListIcon, StarIcon } from 'lucide-react';
import CountUp from 'react-countup';

export default function page() {
  const asasad = [
    {
      icons: <UtensilsIcon className="w-8 h-8 text-indigo-500" />,
      count: 400,
      title: 'Meals Delivered',
    },
    {
      icons: <SmilePlusIcon className="w-8 h-8 text-indigo-500" />,
      count: 123,
      title: 'Happy Customers',
    },
    {
      icons: <ListIcon className="w-8 h-8 text-indigo-500" />,
      count: 32,
      title: 'Menu Items',
    },
    {
      icons: <StarIcon className="w-8 h-8 text-indigo-500" />,
      count: 98,
      title: 'Five Stars',
    },
  ];

  return (
    <div className="flex min-h-screen justify-center items-center bg-slate-950">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {asasad.map((item) => (
          <div
            key={item.title}
            className="flex flex-col w-40 h-40 justify-center items-center rounded-md gap-5 p-3 bg-gray-800 relative border border-slate-700"
          >
            {item.icons}
            <CountUp
              end={item.count}
              duration={2}
              className="text-white text-3xl font-bold"
              start={0}
            />
            <span className="text-slate-200 text-xs">{item.title}</span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 rounded-b-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
