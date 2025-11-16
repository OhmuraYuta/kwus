type SuggestsData = {
    google: string[];
    amazon: string[];
    rakuten: string[];
    yahoo: string[];
}

type Props = {
    suggests: SuggestsData;
};

export default function DisplaySuggests({suggests}: Props) {
    return (
<div className="flex flex-wrap gap-x-5 w-full m-auto h-full">
<section className='flex-1 flex flex-col h-full'>
    <h2>google</h2>
    <ul className='border grow'>
    {suggests.google.map((suggest, index) => (
        <li key={index}>{suggest}</li>
    ))}
    </ul>
</section>
<section className='flex-1 flex flex-col h-full'>
    <h2>amazon</h2>
    <ul className='border grow'>
    {suggests.amazon.map((suggest, index) => (
        <li key={index}>{suggest}</li>
    ))}
    </ul>
</section>
<section className='flex-1 flex flex-col h-full'>
    <h2>rakuten</h2>
    <ul className='border grow'>
    {suggests.rakuten.map((suggest, index) => (
        <li key={index}>{suggest}</li>
    ))}
    </ul>
</section>
<section className='flex-1 flex flex-col h-full'>
    <h2>yahoo</h2>
    <ul className='border grow'>
    {suggests.yahoo.map((suggest, index) => (
        <li key={index}>{suggest}</li>
    ))}
    </ul>
</section>
</div>
    );
}