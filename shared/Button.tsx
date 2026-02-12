'use client'

import { ReactNode } from "react";
import { motion } from 'motion/react'

interface Props {
    click?: () => void;
    type?: 'primary' | 'transparent' | 'white' | 'wallet';
    size?: 'default' | 'small' | 'input';
    children: ReactNode;
    classname?: string;
    typeBtn?: 'button' | 'submit'
}

const Button = ({
    click,
    children,
    type = 'primary',
    size = 'default',
    classname,
    typeBtn = 'button'
}: Props) => {

    const base = "flex items-center gap-3 rounded-[20px] font-semibold cursor-pointer w-full";

    const typeClass =
        type === 'primary'
            ? 'bg-purple border border-purple text-white justify-center'
            : type === 'transparent'
                ? 'bg-transparent border border-purple text-white justify-center'
                : type === 'white'
                    ? 'bg-white text-black justify-center'
                    : 'bg-bg-secondary border border-purple text-white justify-start';

    const sizeClass =
        size === 'small'
            ? 'py-1 px-2 text-[14px]'
            : size === 'input'
                ? 'py-3.25 px-5 text-[16px]'
                : 'py-5 px-7.5 text-[22px]';

    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={click}
            type={typeBtn}
            className={`${base} ${typeClass} ${sizeClass} ${classname}`}
        >
            {children}
        </motion.button>
    );
};

export default Button;
