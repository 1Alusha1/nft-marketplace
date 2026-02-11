'use client'
import { spaceMomoSans } from "@/app/fonts";
import { useEffect, useState } from "react";

type time = {
    minutes: number,
    seconds: number,
    hours: number
}
const Timer = () => {

    const [time, setTime] = useState<time>({
        minutes: 0,
        seconds: 0,
        hours: 10
    })

    let total = 10 * 60 * 60;
    useEffect(() => {
        const updateTimer = () => {
            const hours = Math.floor(total / 3600);
            const minutes = Math.floor((total % 3600) / 60);
            const seconds = total % 60;
            if (total > 0) {
                total--
                setTime({
                    minutes,
                    hours,
                    seconds
                })
            }
        }
        const timer = setInterval(updateTimer, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    const timerFix = (digit: number) => digit < 10 ? `0${digit}` : digit

    return (<div className="bg-[#3B3B3B80] rounded-[20px] p-7.5 w-full md:w-auto">
        <p className={`${spaceMomoSans.className} text-[12px] leading-[110%] mb-2.5`}>Auction ends in:</p>
        <div className="flex items-start justify-center gap-2.5">
            <div className="flex flex-col  items-center">
                <span className="block text-[38px] leading-[120%] font-bold mb-1.25">{timerFix(time.hours)}</span>
                Hours
            </div>
            <span className="block text-[38px] leading-[120%]">:</span>
            <div className="flex flex-col  items-center">
                <span className="block text-[38px] leading-[120%] font-bold mb-1.25">{timerFix(time.minutes)}</span>
                Minutes
            </div>
            <span className="block text-[38px] leading-[120%]">:</span>
            <div className="flex flex-col  items-center">
                <span className="block text-[38px] leading-[120%] font-bold mb-1.25">{timerFix(time.seconds)}</span>
                Seconds
            </div>
        </div>
    </div>);
}

export default Timer;