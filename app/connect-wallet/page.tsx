import Button from "@/shared/Button";
import Input from "@/shared/Input";
import SectionSubTitle from "@/shared/SectionSubTitle";
import Title from "@/shared/Title";
import Image from "next/image";

const ConnectWallet = () => {
    return (
        <main className="md:pt-13.5 lg:pt-[108.1px] flex flex-col md:flex-row gap-7.5 md:gap-10 lg:gap-15 items-center ">
            <img src="/auth/connectwal.png" alt="create account" className="md:h-screen md:w-[50vw] object-cover " />
            <div className="pb-7.5">
                <Title classname="mb-5">
                    Connect wallet
                </Title>
                <SectionSubTitle text={<><span className="block">Choose a wallet you want to connect.</span> There are several wallet providers.</>} classname="mb-10" />

                <div className="grid gap-5">
                    <Button type="wallet">
                        <Image src={'/crypto-wallets/metamask.png'} width={40} height={40} alt="meatamask logo" />
                        Metamask
                    </Button>
                    <Button type="wallet">
                        <Image src={'/crypto-wallets/wallet-connect.png'} width={40} height={40} alt="Wallet Connect logo" />
                        Wallet Connect
                    </Button>
                    <Button type="wallet">
                        <Image src={'/crypto-wallets/coinbase.png'} width={40} height={40} alt="Coinbase logo" />
                        Coinbase
                    </Button>
                </div>

            </div>
        </main>
    );
}

export default ConnectWallet;