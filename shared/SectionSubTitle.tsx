interface Props {
    text: string;
    classname: string
}

const SectionSubTitle = ({ text, classname }: Props) => {
    return (
        <p className={`text-white text-[16px] lg:text-[22px] leading-[140%] ${classname}`}>{text}</p>

    );
}

export default SectionSubTitle;