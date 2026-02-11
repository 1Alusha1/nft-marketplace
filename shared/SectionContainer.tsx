import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const SectionContainer = ({ children }: Props) => {
    return (
        <div className="py-10 lg:py-20">
            {children}
        </div>
    );
}

export default SectionContainer;