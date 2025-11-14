'use client';
import React, { useState, useEffect } from 'react';
import { Platform } from "./DeepDivePlatformSelector";
import { SuggestsSet } from "@/components/ClickableSuggests"

type Props = {
  suggest: string;
  platform: Platform;
  allSuggests: SuggestsSet;
  setAllSuggests: React.Dispatch<React.SetStateAction<SuggestsSet>>;
}

export default function ChildSuggests({ suggest, platform, allSuggests, setAllSuggests }: Props) {

  const [suggests, setSuggests] = useState<string[]>([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setSuggests([]);
  }, [suggest, platform]);
  
  async function fetchSuggests(url: string) {
    const res = await fetch(url);
    const data: string[] = await res.json();
    const difference: string[] = data.filter(el => !allSuggests.has(el));
    setSuggests(difference);

    setAllSuggests(prevAllSuggests => {
      return new Set([...prevAllSuggests, ...difference]);
    });
  }

  const handleClick = () => {
    if (isDisplayed === false) {
      const url = `/api/suggest?keyword=${encodeURIComponent(suggest)}&platform=${encodeURIComponent(platform)}`;
      fetchSuggests(url);
    } else {
      setAllSuggests(prevAllSuggests => {
        let newSet = new Set(prevAllSuggests);

        for (const suggest of suggests) {
          newSet.delete(suggest);
        }

        return newSet;
      });

      setSuggests([]);
    }
    setIsDisplayed(!isDisplayed);
  };
  return (
    <div>
      <button onClick={handleClick}>{suggest}</button>
      <ul className='ml-5'>
        {isDisplayed ? 
          suggests.map((suggest, index) => (
            <li key={index}>
              <ChildSuggests
                suggest={suggest}
                platform={platform}
                allSuggests={allSuggests}
                setAllSuggests={setAllSuggests}
              />
            </li>
          )) : ''
        }
      </ul>
    </div>
  )
}