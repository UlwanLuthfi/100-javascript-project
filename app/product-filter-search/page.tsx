'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Products from './product';

export default function ProductFilterSearch() {
  const categories = ['All', 'Laptop', 'Mouse', 'IEM', 'Phone'];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = Products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      product.categories.includes(selectedCategory);
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div className="flex min-h-screen flex-col p-5">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 w-[40%] min-w-[350px]">
          <input
            type="text"
            placeholder="Search product name here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[80%] h-12 border p-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <button className="bg-blue-500 p-3 text-white rounded-md">
            Search
          </button>
        </div>
        <div className="flex gap-2 overflow-y-scroll no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`border-2 border-blue-500 px-7 py-1 rounded-3xl ${
                selectedCategory === category ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="flex items-center gap-5 border p-5 rounded-md w-full h-[250px] shadow-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={0}
                priority={true}
                className="rounded-md"
                style={{ width: '100px', height: 'auto' }}
              />
              <div>
                <div className="text-lg font-bold">{product.name}</div>
                <div className="text-sm">${product.price}</div>
                <div className="text-sm">{product.categories}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
