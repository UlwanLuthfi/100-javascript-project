'use client';

import { useState } from 'react';

export default function Page() {
  const [searchText, setSearchText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const handleSearch = () => {
    const textToHighlight = document.querySelector('.text-to-highlight');
    if (textToHighlight) {
      const regex = new RegExp(`(${searchText})`, 'gi');
      const innerHTML = textToHighlight.textContent?.replace(
        regex,
        (match) => `<mark>${match}</mark>`
      );
      if (innerHTML !== undefined) {
        setHighlightedText(innerHTML);
      }
    }
  };

  return (
    <div className="flex min-h-screen p-5 justify-center items-center bg-2-color-vertical">
      <div className="flex flex-col gap-5 bg-white p-5 w-[50%] min-w-[350px] rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex justify-between gap-5">
          <input
            type="text"
            placeholder="Enter text to search..."
            className="w-[80%] h-12 border p-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 px-3 lg:w-[20%] text-white rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <span
          className="text-justify leading-loose font-medium text-to-highlight"
          dangerouslySetInnerHTML={{
            __html:
              highlightedText ||
              `
          Exploring new horizons, she ventured into the untamed wilderness,
          seeking solace in nature's embrace. Each step brought discovery, as
          vibrant landscapes unfolded before her. The whispering winds and
          rustling leaves became her companions, guiding her toward a deeper
          understanding of life's intricate beauty and the profound peace
          within.
        `,
          }}
        />
      </div>
    </div>
  );
}
