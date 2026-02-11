import AuthorAvatar from "@/shared/AuthorAvatar";

interface Props {
    imgsPath: string[];
    authorImgPath: string;
    author: string;
    name: string;
}

const TrandCollection = ({ imgsPath, authorImgPath, author, name }: Props) => {
    return (

        <div className="flex flex-col justify-start ">
            <div className="mb-3.75">
                <div className="mb-3.75 overflow-hidden rounded-[20px]">
                    <img src={imgsPath[0]} alt="" className="w-full h-full lg:w-82.5 lg:h-82.5" />
                </div>
                <div className="grid grid-cols-3 gap-3.75 items-center">
                    <img src={imgsPath[1]} alt="" className="w-full h-full md:w-25 md:h-25 rounded-[20px]" />
                    <img src={imgsPath[2]} alt="" className="w-full h-full md:w-25 md:h-25 rounded-[20px]" />
                    <div className="flex flex-col justify-center items-center bg-purple rounded-[20px] text-white font-bold text-[22px] leading-[160%] w-full h-full">{imgsPath.length}+</div>
                </div>
            </div>
            <div>
                <p className="text-white font-semibold text-[22px] mb-2.5">{name}</p>
                <AuthorAvatar authorImgPath={authorImgPath} author={author} />
            </div>
        </div>

    );
}

export default TrandCollection;