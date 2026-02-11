interface Props {
    imgPath: string;
    name: string
}

const CategoryCard = ({ imgPath, name }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-[20px] flex flex-col h-full">
            <div className="">
                <img 
                    src={imgPath} 
                    alt="art" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="bg-bg-secondary pt-5 pb-6.25 px-4 text-white text-[16px] lg:text-[22px] font-semibold flex-1">
                {name}
            </div>
        </div>
    );
};

export default CategoryCard;