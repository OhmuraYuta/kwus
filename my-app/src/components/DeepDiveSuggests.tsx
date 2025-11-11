import { Platform } from '@/components/DeepDivePlatformSelector'

export type Suggests = {
  keyword: string;
  deepDiveData: string[];
}

type Props = {
  platform: Platform;
  suggests: Suggests[];
}

export default function DeepDiveSuggests({platform, suggests}: Props) {
  

  return (
    <div>
      プラットフォーム { platform }
      <ul>
        {suggests.map((suggest, index) => (
          <ul key={index} className='border'>
            <p>{suggest.keyword}</p>
            {suggest.deepDiveData.map((deepDiveSuggest, index) => (
              <li key={index}>{deepDiveSuggest}</li>
            ))}
          </ul>
        ))}
      </ul>
    </div>
  )
}