import { useEffect, useState } from "react";
import { Platform } from "@/components/DeepDivePlatformSelector";

export function useFetchSuggests(keyword: string, platform: Platform) {
  const [suggests, setSuggests] = useState([]);
  useEffect(() => {
    if (keyword === '') {
      setSuggests([]);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const url = `/api/suggest?keyword=${encodeURIComponent(keyword)}&platform=${encodeURIComponent(platform)}`;
    fetch(url, {signal})
      .then((res) => res.json())
      .then((data) => setSuggests(data))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      });

    return () => {
      controller.abort();
    };
    
  }, [keyword, platform]);
  return suggests;
}