import React from "react";

export type Platform = 'google' | 'amazon' | 'rakuten' | 'yahoo';

type Props = {
  platform: Platform;
  setPlatform: (platform: Platform) => void;
}

export default function DeepDivePlatformSelector({platform, setPlatform}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlatform(e.target.value as Platform);
  }
  return (
    <div>
      <fieldset>
        <legend>プラットフォーム</legend>
      </fieldset>
      <div className="space-x-3">
        <input
        type="radio"
        id="google"
        name="platform"
        value="google"
        checked={platform === 'google'}
        onChange={handleChange}
        className="hidden"
         />
        <label htmlFor="google">google</label>

        <input
        type="radio"
        id="amazon"
        name="platform"
        value="amazon"
        checked={platform === 'amazon'}
        onChange={handleChange}
        className="hidden"
         />
        <label htmlFor="amazon">amazon</label>

        <input
        type="radio"
        id="rakuten"
        name="platform"
        value="rakuten"
        checked={platform === 'rakuten'}
        onChange={handleChange}
        className="hidden"
         />
        <label htmlFor="rakuten">rakuten</label>

        <input
        type="radio"
        id="yahoo"
        name="platform"
        value="yahoo"
        checked={platform === 'yahoo'}
        onChange={handleChange}
        className="hidden"
         />
        <label htmlFor="yahoo">yahoo</label>
      </div>
    </div>
  )
}