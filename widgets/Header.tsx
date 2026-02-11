'use client'

import Image from "next/image";
import Button from "../shared/Button";
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "../shared/Logo";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <header className="fixed z-1000 w-full h-13.5 lg:h-[108.1px] bg-bg">
            <div className="fixed flex z-1000 w-full xl:w-7xl xl:left-[50%] xl:-translate-x-[50%] bg-bg justify-between items-center py-3.75 px-3.75 lg:py-5.5 ">
                <Logo />
                <nav className="lg:flex items-center gap-7.5 hidden " >
                    <ul className="flex items-center gap-7.5 text-white text-[16px] font-semibold leading-[140%]">
                        <li><Link href={'/'}>Marketplace</Link></li>
                        <li><Link href={'/'}>Rankings</Link></li>
                        <li><Link href={'/'}>Connect a wallet</Link></li>
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

                <button ref={menuRef} className="flex relative flex-col gap-[4.5px] lg:hidden" onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu">
                    <span className="w-[12.5px] bg-amber-50 block h-[1.5px] rounded-[1.5px]"></span>
                    <span className="w-4.5 bg-amber-50 block h-[1.5px] rounded-[1.5px]"></span>
                    <span className="w-[12.5px] bg-amber-50 block h-[1.5px] rounded-[1.5px]"></span>
                </button>

                {/* mobile nav */}
                <AnimatePresence>
                    {isOpen && <motion.nav initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }} className="absolute top-12.5 right-2 bg-bg-secondary p-3 rounded-xl" >
                        <ul className="flex flex-col gap-2 mb-2 text-white text-[16px] font-semibold leading-[140%]">
                            <Link href={'/'}>Marketplace</Link>
                            <Link href={'/'}>Rankings</Link>
                            <Link href={'/'}>Connect a wallet</Link>
                        </ul>
                        <Link href={'/create-account'}>
                            <Button size="small">
                                <Image src={'/icons/user.png'} width={20} height={20} alt="user" />
                                Sign Up
                            </Button>
                        </Link>
                    </motion.nav>}
                </AnimatePresence>
            </div>
        </header >
    );
}

export default Header;