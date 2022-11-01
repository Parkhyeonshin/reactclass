import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideText = [
    {
        span: "NEW Product",
        title: "SPRING SEASON",
        desc: "따스한 햇살을 타고 부드러운 꽃 향이 다가오는 지금\n향기를 타고 봄이 다가온다",
        aLink: "/",
        aLink2: "/",
        aclass: "black",
    },
    {
        span: "NEW Product",
        title: "SPRING SEASON",
        desc: "따스한 햇살을 타고 부드러운 꽃 향이 다가오는 지금\n향기를 타고 봄이 다가온다",
        aLink: "/",
        aLink2: "/",
        aclass: "black",
    },
    {
        span: "NEW Product",
        title: "SPRING SEASON",
        desc: "따스한 햇살을 타고 부드러운 꽃 향이 다가오는 지금\n향기를 타고 봄이 다가온다",
        aLink: "/",
        aLink2: "/",
        aclass: "black",
    },
];

function Slider(props) {
    return (
        <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
            <h2 class="blind">슬라이드 영역</h2>
            <div className="slider__inner">
                <Swiper
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="desc">
                            <span>{slideText[0].span}</span>
                            <h3>{slideText[0].title}</h3>
                            <p>{slideText[0].desc}</p>
                            <div className="btn">
                                <a href={`${slideText[0].aLink}`}>자세히 보기</a>
                                <a href={`${slideText[0].aLink2}`} className={`${slideText[0].aclass}`}>
                                    제품 보기
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="desc">
                            <span>{slideText[1].span}</span>
                            <h3>{slideText[1].title}</h3>
                            <p>{slideText[1].desc}</p>
                            <div className="btn">
                                <a href={`${slideText[1].aLink}`}>자세히 보기</a>
                                <a href={`${slideText[1].aLink2}`} className={`${slideText[1].aclass}`}>
                                    제품 보기
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="desc">
                            <span>{slideText[2].span}</span>
                            <h3>{slideText[2].title}</h3>
                            <p>{slideText[2].desc}</p>
                            <div className="btn">
                                <a href={`${slideText[2].aLink}`}>자세히 보기</a>
                                <a href={`${slideText[2].aLink2}`} className={`${slideText[2].aclass}`}>
                                    제품 보기
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Slider;
