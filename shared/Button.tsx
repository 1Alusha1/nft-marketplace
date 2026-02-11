import { ReactNode } from "react";

interface Props {
    click?: () => void;
    type?: 'primary' | 'transparent' | 'white';
    size?: 'default' | 'small' | 'input';
    children: ReactNode;
    classname?: string
}

const Button = ({
    click,
    children,
    type = 'primary',
    size = 'default',
    classname
}: Props) => {

    const base = "flex items-center justify-center gap-3 rounded-[20px] font-semibold cursor-pointer transition";

    const typeClass = type === 'primary'
        ? 'bg-purple border border-purple text-white'
        : type === 'transparent' ? 'bg-transparent border border-purple text-white'
            : 'bg-white text-black';

    const sizeClass =
        size === 'small'
            ? 'py-1 px-2 text-[14px]'
            : size === 'input'
                ? 'py-3.25 lg:py-5 px-5 lg:px-7.5 text-[16px] w-full'
                : 'py-5 px-7.5 text-[16px]';

    return (
        <button
            onClick={click}
            className={`${base} ${typeClass} ${sizeClass} ${classname} w-full `}
        >
            {children}
        </button>
    );
};

export default Button;
