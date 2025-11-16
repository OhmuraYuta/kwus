'use client';

import { useEffect, useState } from "react";
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

  useEffect(() => {
    setAllSuggests(new Set([...suggests]));
  }, [suggests]);

  return (
    <div>
      <p>選択：{platform}</p>
      <ul>
        {suggests.map((suggest, index) => (
          <li key={index}>
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
