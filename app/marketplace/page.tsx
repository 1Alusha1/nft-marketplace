import { Suspense } from "react";
import MarketplaceClient from "./MarketplaceClient";

const Marketplace = () => {
    return <main>
        <Suspense fallback={<div className="h-screen">Loading...</div>}>
            <MarketplaceClient />
        </Suspense>
    </main>
}

export default Marketplace;