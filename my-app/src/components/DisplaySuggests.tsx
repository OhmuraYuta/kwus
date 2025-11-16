import { Platform } from "./DeepDivePlatformSelector";

type SuggestsData = {
  google: string[];
  amazon: string[];
  rakuten: string[];
  yahoo: string[];
}

type Props = {
  suggests: SuggestsData;
};

type SuggestsProps = {
  platform: Platform;
  suggests: string[];
}

function Suggests({ platform, suggests }: SuggestsProps) {
  return (
    <section className='flex-1 flex flex-col h-full'>
      <h2>{platform}</h2>
      <ul className='border grow'>
        {suggests.map((suggest, index) => (
          <li key={index}>{suggest}</li>
        ))}
      </ul>
    </section>
    )
}

export default function DisplaySuggests({ suggests }: Props) {
  return (
    <div className="flex flex-wrap gap-x-5 w-full m-auto h-full">
      <Suggests
        platform="google"
        suggests={suggests.google}
      />
      <Suggests
        platform="amazon"
        suggests={suggests.amazon}
      />
      <Suggests
        platform="rakuten"
        suggests={suggests.rakuten}
      />
      <Suggests
        platform="yahoo"
        suggests={suggests.yahoo}
      />
    </div>
  );
}