'use client'
import { spaceMomoSans } from "@/app/fonts";
import Image from "next/image";
import { motion } from 'motion/react'

interface Props {
    count: number;
    imgAuthorPath: string;
    totalSales: number;
    name: string;
}


const Creator = ({ count, imgAuthorPath, totalSales, name }: Props) => {
    return (
        <motion.div
            whileHover={{
                scale: 0.95
            }}
            className="relative  bg-bg-secondary p-5  rounded-[20px] ">
            <div className="absolute flex flex-col items-center justify-center left-5 top-5 bg-bg w-7.5 h-7.5 rounded-full text-lable-text">
                {count}
            </div>
            <div className="flex flex-col items-center">
                <div className="mb-5 rounded-full overflow-hidden" >
                    <Image src={imgAuthorPath} width={120} height={120} alt="author" />
                </div>
                <p className="text-white text-[22px] font-semibold mb-1.25">{name}</p>
                <p className="text-[16px] text-lable-text ">Total Sales: <span className={`pl-1.5 text-white ${spaceMomoSans.className}`}>{totalSales} ETH</span></p>
            </div>
        </motion.div>
    );
}

export default Creator;