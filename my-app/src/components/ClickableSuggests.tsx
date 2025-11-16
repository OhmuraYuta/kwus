'use client';

import { useEffect, useState, useRef } from "react";
import { Platform } from "./DeepDivePlatformSelector";
import { useFetchSuggests } from "@/hooks/useFetchSuggests";
import ChildSuggests from "./ChildSuggests";

type Props = {
  keyword: string;
  platform: Platform;
}

export type SuggestsSet = Set<string>;

export default function ClickableSuggests({ keyword, platform }: Props) {
  const suggests: string[] = useFetchSuggests(keyword, platform);
  const [allSuggests, setAllSuggests] = useState<SuggestsSet>(new Set());

  const [height, setHeight] = useState(100);
  const suggestsBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAllSuggests(new Set([...suggests]));
  }, [suggests]);

  const handleClick = () => {
    if (suggestsBoxRef.current && suggestsBoxRef.current.clientHeight > height) {
      setHeight(suggestsBoxRef.current.clientHeight);
    }
  }

  return (
    <div ref={suggestsBoxRef} style={{ minHeight: height }} onClick={handleClick}>
      <ul>
        {suggests.map((suggest, index) => (
          <li key={index} className="">
            <ChildSuggests
              suggest={suggest}
              platform={platform}
              allSuggests={allSuggests}
              setAllSuggests={setAllSuggests}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
