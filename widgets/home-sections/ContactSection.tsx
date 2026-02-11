import Button from "@/shared/Button";
import SectionContainer from "@/shared/SectionContainer";
import SectionSubTitle from "@/shared/SectionSubTitle";
import SectionTitle from "@/shared/SectionTitle";

const ContactSections = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col md:flex-row items-center gap-7.5 lg:gap-20 p-0 md:p-15 bg-transparent md:bg-bg-secondary rounded-[20px]">
                <img src="/home/contact.png" alt="contact" className="w-full h-full md:w-75 md:h-70 object-cover rounded-[20px]" />
                <div>
                    <SectionTitle text="Join our weekly digest" classname="mb-2.5" />
                    <SectionSubTitle text="Get exclusive promotions & updates straight to your inbox." classname="mb-10" />
                    <form className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center relative">
                        <input type="text" placeholder="Enter your email here" className=" px-5 py-3.25 lg:py-5 lg:px-7.5 text-[16px] w-full lg:w-[80%] border border-white bg-white rounded-[20px] md:rounded-l-[20px] lg:absolute left-0 top-0" />
                        <Button classname="w-full lg:w-auto lg:absolute right-0 top-0" size="input" >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </SectionContainer>
    );
}

export default ContactSections;