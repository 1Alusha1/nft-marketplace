import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (<div className="w-full lg:max-w-261.5 m-[0_auto] px-3.75">
        {children}
    </div>);
}

export default Container;