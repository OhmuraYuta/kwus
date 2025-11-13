'use client';
import { useState, useEffect } from 'react';
import { Platform } from "./DeepDivePlatformSelector";

type Props = {
  suggest: string;
  platform: Platform;
}

export default function ChildSuggests({ suggest, platform }: Props) {

  const [suggests, setSuggests] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setSuggests([]);
  }, [suggest]);
  
  async function fetchSuggests(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    setSuggests(data);
  }

  const handleClick = () => {
    if (isDisplayed === false) {
      const url = `/api/suggest?keyword=${encodeURIComponent(suggest)}&platform=${encodeURIComponent(platform)}`;
      fetchSuggests(url);
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
              />
            </li>
          )) : ''
        }
      </ul>
    </div>
  )
}