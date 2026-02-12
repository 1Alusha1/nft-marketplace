interface Props {
    text: string | number;
    isActive?: boolean;
    font?: 'semibold' | 'normal'
}

const Tag = ({ text, isActive = false, font = 'semibold' }: Props) => {
    return (
        <span
            className={`hidden md:inline-block py-1.25 px-2.5 rounded-[15px] font-normal text-[16px] text-white uppercase
                ${font === 'semibold' ? 'font-semibold' : 'font-normal'}

                                            ${isActive
                    ? 'bg-lable-text'
                    : 'bg-bg-secondary'
                }`}
        >
            {text}
        </span>
    );
}

export default Tag;