'use client';
import React, { useState, useEffect } from 'react';
import DisplaySuggests from '@/components/DisplaySuggests';

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
      <h1>keyword</h1>
      <input
      type="text"
      value={keyword}
      onChange={handleInputChange}
      className='border mb-10'
      />
      <DisplaySuggests suggests={suggests} />
    </div>
  );
};