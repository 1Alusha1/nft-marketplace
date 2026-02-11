interface Props {
    title: string;
    text: string;
    imgPath: string;
}

const InfoCard = ({
    title,
    text,
    imgPath
}: Props) => {
    return (
        <div className="inline-flex flex-row md:flex-col justify-left md:justify-center items-center p-5 bg-bg-secondary rounded-[20px] text-white">
            <img src={imgPath} alt="Setup Your wallet" className="w-25 h-25" />
            <div>
                <h3 className="text-[16px] lg:text-[22px] text-left md:text-center font-semibold leading-[140%] mb-2.5">{title}</h3>
                <p className="text-left md:text-center text-[14px] md:text-[16px] leading-[140%]">{text}</p>
            </div>
        </div>
    );
}

export default InfoCard;