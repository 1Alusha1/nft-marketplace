'use client'
import { profile_tabs } from "@/entities/tabs";
import ArtistHeader from "@/widgets/artist/ArtistHeader";
import Tabs from "@/widgets/artist/Tabs";



const ArtistId = () => {
    return (
        <main>
            <ArtistHeader />
            <Tabs tabs={profile_tabs} />
        </main>
    );
}

export default ArtistId;