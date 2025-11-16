'use client';
import React, { useState, useEffect } from 'react';
import DisplaySuggests from '@/components/DisplaySuggests';
import Link from 'next/link';
import Logo from '@/components/Logo';
import KeywordInput from '@/components/KeywordInput';

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

  return (
    <div className='relative flex flex-col h-screen'>
      <div className='w-fit mx-auto'>
        <Logo/>
      </div>
      <div className='text-center w-2/5 mx-auto'>
        <KeywordInput
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </div>
      <Link href="/deep-dive" className='block absolute top-3 left-3'>Deep dive</Link>

      <div className='grow mb-5 mt-5 w-9/10 mx-auto'>
        <DisplaySuggests suggests={suggests} />
      </div>
    </div>
  );
};