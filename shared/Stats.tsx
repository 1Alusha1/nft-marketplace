interface Props {
    totalSale: number | null;
    auctionsCount: number | null;
    artistsCounst: number | null;
    variant?: 'personal' | 'community';
    mobilePostion?: 'start' | 'center'
}

const Stats = ({ totalSale, artistsCounst, auctionsCount, variant = 'personal', mobilePostion = "center" }: Props) => {
    return (
        <ul className={`flex ${mobilePostion === 'center' ? 'justify-center' : 'justify-start'}  md:justify-start  gap-7.5 mt-7.5 display-none text-white`}>
            <li className="flex flex-col">
                <span className="font-bold text-[22px] leading-[140%] lg:text-[28px] lg:leading-[140%]">{totalSale}</span>
                {variant === 'personal' ? 'Volume' : 'Total Sale'}
            </li>
            <li className="flex flex-col">
                <span className="font-bold text-[22px] leading-[140%] lg:text-[28px] lg:leading-[140%]">{auctionsCount}</span>
                {variant === 'personal' ? 'NFTs Sold' : 'Auctions'}
            </li>
            <li className="flex flex-col">
                <span className="font-bold text-[22px] leading-[140%] lg:text-[28px] lg:leading-[140%]">{artistsCounst}</span>
                {variant === 'personal' ? 'Followers' : 'Artists'}

            </li>
        </ul>
    );
}

export default Stats;