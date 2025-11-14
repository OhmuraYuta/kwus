'use client';
import React, { useState, useEffect } from 'react';
import DisplaySuggests from '@/components/DisplaySuggests';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function GetSuggestsPage() {
  const [keyword, setKeyword] = useState('');
  const [suggests, setSuggests] = useState({
    google: [],
    amazon: [],
    rakuten: [],
    yahoo: [],
  });

  useEffect(() => {
    if (keyword === '') {
      setSuggests({
        google: [],
        amazon: [],
        rakuten: [],
        yahoo: [],
      });
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const url = `/api/suggest?keyword=${encodeURIComponent(keyword)}`;
    fetch(url, {signal})
      .then((res) => res.json())
      .then((data) => {
        setSuggests(data);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      });

    return () => {
      controller.abort();
    };

  }, [keyword]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <div className='w-fit mx-auto'>
        <Logo/>
      </div>
      <input
      type="text"
      value={keyword}
      onChange={handleInputChange}
      className='border mb-10'
      />

      <Link href="/deep-dive" className='block'>深堀り</Link>
      <Link href="click">to click page</Link>

      <DisplaySuggests suggests={suggests} />
    </div>
  );
};