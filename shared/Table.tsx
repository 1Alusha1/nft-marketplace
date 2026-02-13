import { spaceMomoSans } from "@/app/fonts";
import Image from "next/image";
import React from "react";

interface Props {
    author: {
        imgAuthorPath: string;
        name: string;
        change: number;
        totalSale: number;
        volume: number;
    }[]
}

const Table = ({ author }: Props) => {
    return (<table className="w-full overflow-auto border-separate border-spacing-0">
        <thead>
            <tr className={`text-left text-lable-text text-[16px] font-normal border ${spaceMomoSans.className}`}>
                <th className="py-3 border-l border-t border-b pl-5 rounded-l-[20px] bg-bg text-[12px] md:text-[16px]">#</th>
                <th className="py-3 border-t border-b bg-bg text-[12px] md:text-[16px]">Artist</th>
                <th className="py-3 border-t border-b bg-bg hidden md:table-cell">Change</th>
                <th className="py-3 border-t border-b bg-bg hidden lg:table-cell">NFTs Sold</th>
                <th className="py-3 border-r border-t border-b pr-5 rounded-r-[20px] bg-bg text-[12px] md:text-[16px]">Volume</th>
            </tr>
            <tr className="h-5 "></tr>
        </thead>
        <tbody>
            {author.map(({ name, imgAuthorPath, totalSale, change, volume }, idx) => (
                <React.Fragment key={idx}>
                    <tr className="">
                        <td className="py-3 pl-5 rounded-l-[20px] bg-bg-secondary">
                            <span className="text-lable-text bg-bg py-1 px-2.5 rounded-full text-[12px] md:text-[16px]">
                                {idx + 1}
                            </span>
                        </td>
                        <td className="py-3 bg-bg-secondary flex items-center gap-5 text-white text-[12px] md:text-[22px] font-semibold leading-[140%]">
                            <img src={imgAuthorPath} alt="author img" className="rounded-full w-6 h-6 lg:w-30 lg:h-30" />
                            {name}
                        </td>
                        <td className="py-3 bg-bg-secondary text-custom-green text-[16px] font-light leading-[140%] hidden md:table-cell">
                            +{change}%
                        </td>
                        <td className="py-3 bg-bg-secondary text-white text-[16px] font-light leading-[140%] hidden lg:table-cell">
                            {totalSale}
                        </td>
                        <td className="py-3 pr-5 rounded-r-[20px] bg-bg-secondary text-white text-[12px] md:text-[16px] font-light leading-[140%]">
                            {volume} ETH
                        </td>
                    </tr>

                    {/* Пустой отступ */}
                    <tr key={`spacer-${idx}`} className="h-5"></tr>
                </React.Fragment>
            ))}
        </tbody>
    </table>);
}

export default Table;