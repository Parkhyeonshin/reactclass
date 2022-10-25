import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
    return (
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
                        <span>NEW Product</span>
                        <h3>SPRING SEASON</h3>
                        <p>
                            따스한 햇살을 타고 부드러운 꽃 향이 다가오는 지금
                            <br />
                            향기를 타고 봄이 다가온다
                        </p>
                        <div className="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" className="black">
                                제품 보기
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <span>NEW Product</span>
                        <h3>SPRING SEASON</h3>
                        <p>
                            따스한 햇살을 타고 부드러운 꽃 향이 다가오는 지금
                            <br />
                            향기를 타고 봄이 다가온다
                        </p>
                        <div className="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" className="black">
                                제품 보기
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <span>NEW Product</span>
                        <h3>SPRING SEASON</h3>
                        <p>
                            따스한 햇살을 타고 부드러운 꽃 향이 다가오는 지금
                            <br />
                            향기를 타고 봄이 다가온다
                        </p>
                        <div className="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" className="black">
                                제품 보기
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
