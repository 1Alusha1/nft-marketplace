import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    classname: string;
}

const Title = ({ children, classname }: Props) => {
    return (<h1 className={`text-[28px] md:text-[38px] lg:text-[51px] text-white font-semibold leading-[140%] md:leading-[120%] lg:leading-[110%]  ${classname}`}>
        {children}
    </h1>);
}

export default Title;