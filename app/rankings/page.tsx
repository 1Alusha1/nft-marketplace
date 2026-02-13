import { Suspense } from "react";
import RankingsClient from "./RankingsClient";

const Rankings = () => {
    return (
        <main>
            <Suspense fallback={<div className="h-screen">Loading...</div>}>
                <RankingsClient />
            </Suspense>
        </main>
    );
}

export default Rankings;