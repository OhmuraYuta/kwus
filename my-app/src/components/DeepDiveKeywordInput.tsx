'use client';
import React, { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { Platform } from "@/components/DeepDivePlatformSelector";
import { Suggests } from "@/components/DeepDiveSuggests";

type Props = {
  platform: Platform;
  setSuggests: (suggests: Suggests[]) => void;
}

async function fetchSuggests(platform: Platform, keyword: string) {
  const url = `/api/suggest/deep-dive?platform=${encodeURIComponent(platform)}&keyword=${encodeURIComponent(keyword)}`;
  const data = await fetch(url)
  return await data.json();
}

export default function DeepDiveKeywordInput({ platform, setSuggests }: Props) {
  const [keyword, setKeyword] = useState('');

  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    if (debouncedKeyword === '') {
      return;
    }

    async function main() {
      const data = await fetchSuggests(platform, debouncedKeyword);

      let suggests = [];
      for (let i=0; i<3; i++) {
        const keyword = data[i];
        const deepDiveData = await fetchSuggests(platform, keyword);
        suggests.push({
          keyword: keyword,
          deepDiveData: deepDiveData,
        })
      }

      setSuggests(suggests);
    }
    main();
    
  }, [debouncedKeyword, platform]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={handleInputChange}
        className="border"
      />
    </div>
  )
}
