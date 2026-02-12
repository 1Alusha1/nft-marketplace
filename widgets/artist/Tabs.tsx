'use client'

import { ReactNode, useState } from "react";
import Container from "@/shared/Container";
import SectionContainer from "@/shared/SectionContainer";

export interface TabItem {
    id: number;
    label: string;
    count?: number;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    defaultTab?: number;
}

const Tabs = ({ tabs, defaultTab }: TabsProps) => {
    const [activeTab, setActiveTab] = useState<number>(
        defaultTab ?? tabs[0].id
    );

    const activeContent = tabs.find(t => t.id === activeTab)?.content;

    return (
        <>
            <div className="w-full border-t border-bg-secondary">
                <Container>
                    <ul className="flex">
                        {tabs.map(tab => {
                            const isActive = activeTab === tab.id;

                            return (
                                <li
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 text-center text-[22px] font-semibold py-[14.5px] cursor-pointer
                                    ${isActive
                                            ? 'border-b border-lable-text text-white'
                                            : 'text-lable-text'
                                        }`}
                                >
                                    {tab.label}

                                    {tab.count !== undefined && (
                                        <span
                                            className={`hidden md:inline-block ml-4 py-1.25 px-2.5 rounded-[15px] font-normal text-[16px]
                                            ${isActive
                                                    ? 'bg-lable-text'
                                                    : 'bg-bg-secondary'
                                                }`}
                                        >
                                            {tab.count}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </Container>
            </div>
            <div className="bg-bg-secondary border-b border-bg">
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
