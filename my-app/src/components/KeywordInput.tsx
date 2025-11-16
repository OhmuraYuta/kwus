'use client';

import React from "react";

type Props = {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export default function KeywordInput({ keyword, setKeyword }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return (
    <input
      type="text"
      value={keyword}
      onChange={handleInputChange}
      className="border-white w-full rounded-full bg-white text-black px-2 focus:outline-none"
    />
  )
}
