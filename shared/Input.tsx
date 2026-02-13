import Image from "next/image";

interface Props {
    type: string;
    placeholder?: string;
    onchange?: () => void;
    imgPath?: string;
}

const Input = ({ type="text", placeholder, onchange, imgPath }: Props) => {
    return (
        <div className="relative flex items-center ">
            {imgPath && <Image src={imgPath} alt="input icon" width={20} height={20} className="absolute left-5" />}
            <input type={type} placeholder={placeholder} onChange={onchange} className="text-[16px] leading-[140%] text-bg bg-white w-full py-3 pr-5 pl-13 rounded-[20px] outline-0" />
        </div>
    );
}

export default Input;