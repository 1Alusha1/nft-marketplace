'use client'

import { ReactNode, useState } from "react";
import Container from "@/shared/Container";
import SectionContainer from "@/shared/SectionContainer";
import Tag from "./Tag";

export interface TabItem {
    id: string;
    label: string;
    mobileLabla?: string;
    count?: number;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onChange: (id: string) => void;
    bg?: 'light' | 'dark'
    isCount?: boolean;

}

const Tabs = ({ tabs, activeTab, onChange, bg = 'light', isCount = true }: TabsProps) => {
    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;
    return (
        <>
            <div className={`w-full border-t border-bg-secondary bg-bg`}>
                <Container>
                    <ul className="flex">
                        {tabs.map(tab => {
                            const isActive = activeTab === tab.id;

                            return (
                                <li
                                    key={tab.id}
                                    onClick={() => onChange(tab.id)}
                                    className={` flex justify-center gap-4 flex-1 text-center text-[22px] font-semibold py-[14.5px] cursor-pointer
                                    ${isActive
                                            ? 'border-b border-lable-text text-white'
                                            : 'text-lable-text'
                                        }`}
                                >
                                    <span className={`${tab.mobileLabla && 'hidden md:block'}`}>{tab.label}</span>
                                    {tab.mobileLabla ? <span className="block md:hidden">{tab.mobileLabla}</span> : null}


                                    {isCount ? (
                                        tab.count !== undefined && (
                                            <Tag text={tab.count} isActive={isActive} font="normal" />
                                        )
                                    ) : null}

                                </li>
                            );
                        })}
                    </ul>
                </Container>
            </div>
            <div className={`${bg === 'light' ? 'bg-bg-secondary border-b border-bg' : 'bg-bg'} `}>
                <Container>
                    <SectionContainer>
                        {activeContent}
                    </SectionContainer>
                </Container>
            </div>
        </>
    );
};

export default Tabs;
