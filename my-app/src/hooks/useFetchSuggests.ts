import { useEffect, useState } from "react";
import { Platform } from "@/components/DeepDivePlatformSelector";

export function useFetchSuggests(keyword: string, platform: Platform) {
  const [suggests, setSuggests] = useState([]);
  useEffect(() => {
    if (keyword === '') {
      setSuggests([]);
      return;
    }
    async function main() {
      const url = `/api/suggest?keyword=${encodeURIComponent(keyword)}&platform=${encodeURIComponent(platform)}`;
      const res = await fetch(url);
      const data = await res.json();
      setSuggests(data);
    }
    main();
  }, [keyword, platform]);
  return suggests;
}