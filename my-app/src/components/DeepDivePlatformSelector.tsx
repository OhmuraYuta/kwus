import React from "react";

export type Platform = 'google' | 'amazon' | 'rakuten' | 'yahoo';

type Props = {
  platform: Platform;
  setPlatform: (platform: Platform) => void;
}

type SelectorProps = {
  platform: Platform;
  platform_name: Platform;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Selector({ platform, platform_name, handleChange }: SelectorProps) {
  return (
    <div>
      <input
        type="radio"
        id={platform_name}
        name="platform_name"
        value={platform_name}
        checked={platform === platform_name}
        onChange={handleChange}
        className="hidden peer"
        />
      <label htmlFor={platform_name} className="peer-checked:bg-white peer-checked:text-black py-0.5 px-1 rounded-full">{platform_name}</label>
    </div>
  )
}

export default function DeepDivePlatformSelector({platform, setPlatform}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlatform(e.target.value as Platform);
  }
  return (
    <div className="space-x-3 flex w-fit">
      <Selector
        platform={platform}
        platform_name="google"
        handleChange={handleChange}
      />
      <Selector
        platform={platform}
        platform_name="amazon"
        handleChange={handleChange}
      />
      <Selector
        platform={platform}
        platform_name="rakuten"
        handleChange={handleChange}
      />
      <Selector
        platform={platform}
        platform_name="yahoo"
        handleChange={handleChange}
      />
    </div>
  )
}