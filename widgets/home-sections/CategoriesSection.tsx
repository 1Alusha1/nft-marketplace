import CategoryCard from "@/shared/CategoryCard";
import SectionTitle from "@/shared/SectionTitle";
import { data } from '../../entities/categories'
import SectionContainer from "@/shared/SectionContainer";

const CategoriesSection = () => {
    return (
        <SectionContainer>
            <SectionTitle text="Browse Categories" classname="mb-20" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-7.5 ">
                {data.map(({ imgPath, name }, idx) => <CategoryCard key={idx} imgPath={imgPath} name={name} />)}
            </div>
        </SectionContainer>
    );
}

export default CategoriesSection;