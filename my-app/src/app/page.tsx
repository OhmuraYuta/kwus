'use client';
import React, { useState, useEffect } from 'react';

export default function GetSuggestsPage() {
  const [keyword, setKeyword] = useState('');
  const [suggests, setSuggests] = useState({
    google: [],
    amazon: [],
  });

  useEffect(() => {
    if (keyword === '') {
      setSuggests({
        google: [],
        amazon: [],
      });
      return;
    }

    const url = `/api/suggest?keyword=${encodeURIComponent(keyword)}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSuggests(data);
      })

  }, [keyword]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <h1>keyword</h1>
      <input
      type="text"
      value={keyword}
      onChange={handleInputChange}
      className='border mb-10'
      />
      <div className="flex gap-x-2 w-4/5 m-auto">
        <section className='flex-1'>
          <h2>google</h2>
          <ul className='border h-100'>
            {suggests.google.map((suggest, index) => (
              <li key={index}>{suggest}</li>
            ))}
          </ul>
        </section>
        <section className='flex-1'>
          <h2>amazon</h2>
          <ul className='border h-100'>
            {suggests.amazon.map((suggest, index) => (
              <li key={index}>{suggest}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};