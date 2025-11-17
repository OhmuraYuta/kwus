'use client';
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { Platform } from "./DeepDivePlatformSelector";

type Props = {
  keyword: string;
  platform: Platform;
}

export default function WordsFromItemPages({ keyword, platform }: Props) {
  const [words, setWords] = useState([]);

  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    if (debouncedKeyword === '') {
      setWords([]);
      return;
    }

    const url = `/api/words?keyword=${encodeURIComponent(keyword)}&platform=${platform}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWords(data);
      })

  }, [debouncedKeyword, platform]);

  return (
    <div>
      <h2>{platform}のページ</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word[0]}: {word[1]}</li>
        ))}
      </ul>
    </div>
  )
}
