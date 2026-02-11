interface Props {
    text: string;
    classname: string
}

const SectionTitle = ({ text, classname }: Props) => {
    return (<h2 className={`text-white font-semibold text-[28px] leading-[140%] ${classname}`}>{text}</h2>);
}

export default SectionTitle;