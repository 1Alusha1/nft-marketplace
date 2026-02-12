'use client'

import { ReactNode, useState } from "react";
import Container from "@/shared/Container";
import SectionContainer from "@/shared/SectionContainer";
import Tag from "./Tag";

export interface TabItem {
    id: string;
    label: string;
    count?: number;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onChange: (id: string) => void;
}

const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => {
    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

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
                                    onClick={() => onChange(tab.id)}
                                    className={` flex justify-center gap-4 flex-1 text-center text-[22px] font-semibold py-[14.5px] cursor-pointer
                                    ${isActive
                                            ? 'border-b border-lable-text text-white'
                                            : 'text-lable-text'
                                        }`}
                                >
                                    {tab.label}

                                    {tab.count !== undefined && (
                                        <Tag text={tab.count} isActive={isActive} font="normal"/>
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
