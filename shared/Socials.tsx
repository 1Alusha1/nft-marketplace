import Image from "next/image";
import Link from "next/link";

const Socials = () => {
    return (
        <ul className="flex gap-2.5">
            <li>
                <Link href=''>
                    <Image src={'/socials/ds.png'} width={32} height={32} alt="discord logo" />
                </Link>
            </li>
            <li>
                <Link href=''>
                    <Image src={'/socials/yt.png'} width={32} height={32} alt="yt logo" />
                </Link>
            </li>
            <li>
                <Link href=''>
                    <Image src={'/socials/X.png'} width={32} height={32} alt="twitter logo" />
                </Link>
            </li>
            <li>
                <Link href=''>
                    <Image src={'/socials/inst.png'} width={32} height={32} alt="instagram logo" />
                </Link>
            </li>
        </ul>
    );
}

export default Socials;