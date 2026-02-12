'use client'

import Button from "@/shared/Button";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'motion/react'

interface Props {
    links: {
        text: string;
        path: string;
    }[];
    type: "mobile" | "desktop",
    isOpen?: boolean
}

const Navbar = ({ links, type, isOpen }: Props) => {
    return (

        <>
            {type == 'desktop' ?
                <nav className="lg:flex items-center gap-7.5 hidden " >
                    <ul className="flex items-center gap-7.5 text-white text-[16px] font-semibold leading-[140%]">
                        {links.map(({ text, path }, idx) =>
                            <li key={idx}><Link href={path}>{text}</Link></li>
                        )}
                        <li>
                            <Link href={'/create-account'}>
                                <Button>
                                    <Image src={'/icons/user.png'} width={20} height={20} alt="user" />
                                    Sign Up
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                :
                <AnimatePresence>
                    {isOpen && <motion.nav initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }} className="absolute top-12.5 right-2 bg-bg-secondary p-3 rounded-xl" >
                        <ul className="flex flex-col gap-2 mb-2 text-white text-[16px] font-semibold leading-[140%]">
                            {links.map(({ text, path }, idx) =>
                                <li key={idx}><Link href={path}>{text}</Link></li>
                            )}
                        </ul>
                        <Link href={'/create-account'}>
                            <Button size="small">
                                <Image src={'/icons/user.png'} width={20} height={20} alt="user" />
                                Sign Up
                            </Button>
                        </Link>
                    </motion.nav>}
                </AnimatePresence>}</>

    );
}

export default Navbar;