'use client';

import { Platform } from "./DeepDivePlatformSelector";
import { useFetchSuggests } from "@/hooks/useFetchSuggests";
import ChildSuggests from "./ChildSuggests";

type Props = {
  keyword: string;
  platform: Platform;
}

export default function ClickableSuggests({ keyword, platform }: Props) {
  const suggests = useFetchSuggests(keyword, platform);

  return (
    <div>
      <p>選択：{platform}</p>
      <ul>
        {suggests.map((suggest, index) => (
          <li key={index}>
            <ChildSuggests
              suggest={suggest}
              platform={platform}
            />
          </li>
        ))}
      </ul>
      <ul>

      </ul>
    </div>
  )
}
