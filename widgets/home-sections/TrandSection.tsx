'use client'
import TrandCollection from "@/shared/TrandCollection";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import SectionTitle from "@/shared/SectionTitle";
import SectionSubTitle from "@/shared/SectionSubTitle";
import { data } from '../../entities/trandCollectoin'
import SectionContainer from "@/shared/SectionContainer";
const TrandSection = () => {
    return (
        <SectionContainer>
            <SectionTitle text="Trending Collection" classname="mb-2.5" />
            <SectionSubTitle text="Checkout our weekly updated trending collection." classname="mb-15" />
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {data.map(({ imgsPath, name, author, authorImgPath }, idx) =>
                    <SwiperSlide key={idx}>
                        <TrandCollection imgsPath={imgsPath} name={name} author={author} authorImgPath={authorImgPath} />
                    </SwiperSlide>
                )}
            </Swiper>
        </SectionContainer>
    );
}

export default TrandSection;