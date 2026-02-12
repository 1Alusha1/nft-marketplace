import Button from "@/shared/Button";
import Input from "@/shared/Input";
import SectionSubTitle from "@/shared/SectionSubTitle";

const CreateAccount = () => {
    return (
        <main className="md:pt-13.5 lg:pt-[108.1px] flex flex-col md:flex-row gap-7.5 md:gap-10 lg:gap-15 items-center ">
            <img src="/auth/createacc.png" alt="create account" className="md:h-screen md:w-[50vw] object-cover " />
            <div className="pb-7.5">
                <h1 className="text-[38px] lg:text-[51px] text-white leading-[110%] font-semibold mb-5">Create account</h1>
                <SectionSubTitle text={<><span className="block">Welcome! enter your details and start</span> creating, collecting and selling NFTs.</>} classname="mb-10" />

                <form className="grid gap-3.75 lg:w-[82%]">
                    <Input imgPath="/icons/user-gray.png" type="text" placeholder="Username" />
                    <Input imgPath="/icons/message-gray.png" type="email" placeholder="Email Address" />
                    <Input imgPath="/icons/lock-key.png" type="password" placeholder="Password" />
                    <Input imgPath="/icons/lock-key.png" type="password" placeholder="Password" />
                    <Button size="input" typeBtn="submit">
                        Create account
                    </Button>
                </form>
            </div>
        </main>
    );
}

export default CreateAccount;