import Link from "next/link";

const Logo = () => {
    return (<Link href={'/'}>
        <img src="/logo.png" alt="logo" className="w-[182.56px] h-6 lg:w-60.75 lg:h-8" />
    </Link>);
}

export default Logo;