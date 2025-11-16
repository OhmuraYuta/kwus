'use client';

import { useState } from "react";
import KeywordInput from "@/components/KeywordInput";
import DeepDivePlatformSelector, { Platform } from "@/components/DeepDivePlatformSelector";
import Link from "next/link";
import ClickableSuggests from "@/components/ClickableSuggests";
import Logo from "@/components/Logo";
import React from "react";

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

      <ClickableSuggests
        keyword={keyword}
        platform={platform}
      />
    </div>
  )
}