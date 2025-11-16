'use client';

import { useState } from "react";
import KeywordInput from "@/components/KeywordInput";
import DeepDivePlatformSelector, { Platform } from "@/components/DeepDivePlatformSelector";
import Link from "next/link";
import ClickableSuggests from "@/components/ClickableSuggests";

export default function ClickPage() {
  const [keyword, setKeyword] = useState('');
  const [platform, setPlatform] = useState<Platform>('google');

  return (
    <div className="space-y-2">
      <div>
        <Link href="/">top</Link>
      </div>
      <KeywordInput
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <DeepDivePlatformSelector
        platform={platform}
        setPlatform={setPlatform}
      />
      <ClickableSuggests
        keyword={keyword}
        platform={platform}
      />
    </div>
  )
}