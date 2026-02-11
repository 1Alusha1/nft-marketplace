'use client'

import { ReactNode } from "react";
import { motion } from 'motion/react'

interface Props {
    click?: () => void;
    type?: 'primary' | 'transparent' | 'white';
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

    const base = "flex items-center justify-center gap-3 rounded-[20px] font-semibold cursor-pointer";

    const typeClass = type === 'primary'
        ? 'bg-purple border border-purple text-white'
        : type === 'transparent' ? 'bg-transparent border border-purple text-white'
            : 'bg-white text-black';

    const sizeClass =
        size === 'small'
            ? 'py-1 px-2 text-[14px]'
            : size === 'input'
                ? 'py-3.25 px-5 text-[16px] w-full'
                : 'py-5 px-7.5 text-[16px]';

    return (
        <motion.button
            whileHover={{
                scale: 1.05
            }}
            onClick={click}
            type={typeBtn}
            className={`${base} ${typeClass} ${sizeClass} ${classname}  w-full `}
        >
            {children}
        </motion.button>
    );
};

export default Button;
