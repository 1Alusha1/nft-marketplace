import Image from "next/image";

interface Props {
    authorImgPath: string;
    author: string
}

const AuthorAvatar = ({ authorImgPath, author }: Props) => {
    return (
        <div className="flex items-center gap-3">
            <Image src={authorImgPath} width={24} height={24} alt="author image" className="rounded-full" />
            <p className="text-[16px] leading-[140%] text-white">{author}</p>
        </div>
    );
}

export default AuthorAvatar;