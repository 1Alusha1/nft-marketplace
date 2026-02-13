'use client'

import Container from "@/shared/Container";
import Tabs from "@/shared/Tabs";
import RankingsHeader from "@/widgets/rankings/RankingsHeader";
import { useRouter, useSearchParams } from "next/navigation";
import Table from "@/shared/Table";
import { artist } from '../../entities/artist'

const RankingsClient = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeTab = searchParams.get('tab') ?? 'today'

    const changeTab = (tab: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('tab', tab);
        router.push(`?${params.toString()}`, { scroll: false })
    }
    const tableData = artist.map(item => ({
        name: item.name,
        imgAuthorPath: item.imgAuthorPath,
        totalSale: item.stats.totalSale,
        change: item.change,
        volume: item.stats.totalSale
    }))


    const tabs = [
        {
            id: "today",
            label: "Today",
            mobileLabla: '1d',
            count: 0,
            content:
                <Table author={tableData} />
        },
        {
            id: "week",
            label: "This Week",
            mobileLabla: '7d',
            count: 0,
            content: <Table author={tableData} />

        },
        {
            id: "month",
            label: "This Month",
            mobileLabla: '30d',
            count: 0,
            content: <Table author={tableData} />

        },
        {
            id: "alltime",
            label: "All Time",
            count: 0,
            content: <Table author={tableData} />
        },
    ]

    return (<div className="pt-13.5 lg:pt-[108.09px]">
        <Container>
            <RankingsHeader />
        </Container>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={changeTab} bg="dark" isCount={false} />

    </div>);
}

export default RankingsClient;