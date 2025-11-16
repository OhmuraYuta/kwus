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
    <section className='w-[23%] flex flex-col h-full'>
      <h2 className="text-center mb-1">{platform}</h2>
      <ul className='border rounded-2xl p-3 overflow-auto grow'>
        {suggests.map((suggest, index) => (
          <li key={index} className="whitespace-nowrap mb-1">{suggest}</li>
        ))}
      </ul>
    </section>
    )
}

export default function DisplaySuggests({ suggests }: Props) {
  return (
    <div className="flex justify-between flex-wrap gap-x-5 w-full m-auto h-full">
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