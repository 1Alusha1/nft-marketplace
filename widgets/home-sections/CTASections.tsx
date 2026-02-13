'use client'
import AuthorAvatar from "@/shared/AuthorAvatar";
import Button from "@/shared/Button";
import Container from "@/shared/Container";
import Timer from "@/shared/Timer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CTASections = () => {
    const router = useRouter();

    return (
        <div className="cta">
            <Container>
                <div className="relative z-1005 flex flex-col justify-end h-screen w-full ">
                    <div className="flex flex-col md:flex-row justify-between gap-7.5 md:gap-0 items-center text-white pb-15">
                        <div>
                            <div className="bg-bg py-2.5 px-5 rounded-[20px] mb-7.5 inline-block">
                                <AuthorAvatar author="Shroomie" authorImgPath="/authors/a3.png" />
                            </div>
                            <h2 className="font-semibold text-[51px] leading-[110%] mb-7.5">Magic Mashrooms</h2>
                            <Button type="white" click={() => router.push('/nft/nf1')}>
                                <Image src={'/icons/eye.png'} width={20} height={20} alt="eye icon" />
                                See NFT
                            </Button>
                        </div>
                        <Timer />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CTASections;