'use client'

import Image from "next/image";
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from "react";
import Logo from "@/shared/Logo";
import Navbar from "./Navbar";
import { data } from '../../entities/navbar'

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
        <header className="fixed z-1004 w-full h-13.5 lg:h-[108.1px] bg-bg">
            <div className="fixed flex z-1004 w-full xl:w-7xl xl:left-[50%] xl:-translate-x-[50%] bg-bg justify-between items-center py-3.75 px-3.75 lg:py-5.5 ">
                <Logo />
                <Navbar links={data} type="desktop" />

                <button ref={menuRef} className="flex relative flex-col gap-[4.5px] lg:hidden" onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu">
                    <span className="w-[12.5px] bg-amber-50 block h-[1.5px] rounded-[1.5px]"></span>
                    <span className="w-4.5 bg-amber-50 block h-[1.5px] rounded-[1.5px]"></span>
                    <span className="w-[12.5px] bg-amber-50 block h-[1.5px] rounded-[1.5px]"></span>
                </button>

                {/* mobile nav */}
                <Navbar links={data} type="mobile" isOpen={isOpen} />
            </div>
        </header >
    );
}

export default Header;