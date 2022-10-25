import React from "react";

function Imagetext({ attr }) {
    return (
        <>
            <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} `}>
                <h2 className="blind">유용한 사이트 살펴보기</h2>
                <div className={`imgText__inner ${attr[3]}`}>
                    <div className="imgText__txt">
                        <span className="blind">이미지 텍스트 유형01</span>
                        <h3>
                            당신의 향수에
                            <br />
                            만족하시나요?
                        </h3>
                        <p>
                            수 만개의 향수 중 당신의 향수를 찾는 것
                            <br />
                            그것은 운명과도 같은 일입니다.
                        </p>
                        <ul>
                            <li>
                                <a href="/">당신만의 향수</a>
                            </li>
                            <li>
                                <a href="/">무료로 시향하세요</a>
                            </li>
                            <li>
                                <a href="/">당일 주문 / 당일 출고</a>
                            </li>
                            <li>
                                <a href="/">당신만의 향수</a>
                            </li>
                            <li>
                                <a href="/">무료로 시향하세요</a>
                            </li>
                            <li>
                                <a href="/">당일 주문 / 당일 출고</a>
                            </li>
                        </ul>
                    </div>
                    <div className="imgbox">
                        <div className="imgText__img img1">
                            <a href="/">PERSONAL</a>
                        </div>
                        <div className="imgText__img img2">
                            <a href="/" className="blue">
                                CUSTOM
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Imagetext;
