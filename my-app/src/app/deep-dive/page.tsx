'use client';

import { useState } from "react";
import KeywordInput from "@/components/KeywordInput";
import DeepDivePlatformSelector, { Platform } from "@/components/DeepDivePlatformSelector";
import Link from "next/link";
import ClickableSuggests from "@/components/ClickableSuggests";
import Logo from "@/components/Logo";
import React from "react";
import WordsFromItemPages from "@/components/WordsFromItemPages";

export default function ClickPage() {
  const [keyword, setKeyword] = useState('');
  const [platform, setPlatform] = useState<Platform>('google');

  return (
    <div className="">
      <div className='w-fit mx-auto'>
        <Logo/>
      </div>

      <div className='text-center w-2/5 mx-auto'>
        <KeywordInput
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </div>

      <Link href="/" className='block absolute top-3 left-3'>top</Link>

      <div className="w-fit mx-auto mt-5">
        <DeepDivePlatformSelector
          platform={platform}
          setPlatform={setPlatform}
        />
      </div>

      <div className="flex justify-between w-full mt-5 mx-auto">
        <div className="overflow-x-auto w-[60%] ml-[20%] shrink-0">
          <ClickableSuggests
            keyword={keyword}
            platform={platform}
          />
        </div>
        <div className="w-[20%]">
          {platform === 'rakuten' || platform === 'yahoo' ?
          <WordsFromItemPages
            keyword={keyword}
            platform={platform}
          /> : null }
        </div>
      </div>
    </div>
  )
}