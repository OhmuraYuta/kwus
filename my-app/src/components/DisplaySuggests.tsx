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
<div className="flex flex-wrap gap-x-2 w-4/5 m-auto">
<section className='flex-1'>
    <h2>google</h2>
    <ul className='border h-100'>
    {suggests.google.map((suggest, index) => (
        <li key={index}>{suggest}</li>
    ))}
    </ul>
</section>
<section className='flex-1'>
    <h2>amazon</h2>
    <ul className='border h-100'>
    {suggests.amazon.map((suggest, index) => (
        <li key={index}>{suggest}</li>
    ))}
    </ul>
</section>
<section className='flex-1'>
    <h2>rakuten</h2>
    <ul className='border h-100'>
    {suggests.rakuten.map((suggest, index) => (
        <li key={index}>{suggest}</li>
    ))}
    </ul>
</section>
<section className='flex-1'>
    <h2>yahoo</h2>
    <ul className='border h-100'>
    {suggests.yahoo.map((suggest, index) => (
        <li key={index}>{suggest}</li>
    ))}
    </ul>
</section>
</div>
    );
}