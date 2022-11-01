import React from "react";

function Card({ attr }) {
    return (
        <>
            <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]} `}>
                <h2>선인장에서 추출한 이국적 향</h2>
                <p>지중해 연안을 상징하는 선인장 열매인 프리클리 페어를 메인으로 시작되는 BSET EDITION</p>
                <div className={`card__inner ${attr[2]}`}>
                    <article className="card">
                        <figure className="card__header">
                            <img src="assets/img/card_bg01_01_1.jpg" alt="외형에 대한 오해 이미지" />
                        </figure>
                        <div className="card__body">
                            <h3 className="tit">Cactus</h3>
                            <p className="desc">
                                오가닉 버베나와 선인장 추출물이 조화를 이루는 향으로 여름 갈증을 해소하는 이국적이고
                                상쾌한 기운을 느낄 수 있습니다.
                                <br />
                                여름과 어울리는 밝고 신선한 향을 선사합니다.
                            </p>
                            <a className="btn" href="/">
                                더 자세히 보기
                                <span aria-hidden="true">
                                    <svg
                                        width="35"
                                        height="8"
                                        viewBox="0 0 65 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="card">
                        <figure className="card__header">
                            <img src="assets/img/card_bg01_02_1.jpg" alt="도베르만의 성격 이미지" />
                        </figure>
                        <div className="card__body">
                            <h3 className="tit">무더운 날씨에도 꽃피우는 향기</h3>
                            <p className="desc">
                                청량한 느낌이 낯설다면, 아마 이 향수가 없어서가 아닐까요?
                                <br />
                                고객님들이 사랑해주신 이 향수
                                <br />
                                당신과 어울리는 밝고 신선한 향을 선사해드립니다.
                            </p>
                            <a className="btn" href="/">
                                더 자세히 보기
                                <span aria-hidden="true">
                                    <svg
                                        width="35"
                                        height="8"
                                        viewBox="0 0 65 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="card">
                        <figure className="card__header">
                            <img src="assets/img/card_bg01_03_1.jpg" alt="도베르만을 키울때 주의할 점 이미지" />
                        </figure>
                        <div className="card__body">
                            <h3 className="tit">Very Royal Cactus</h3>
                            <p className="desc">
                                오가닉 버베나와 선인장 추출물이 조화를 이루는 향으로 여름 갈증을 해소하는 이국적이고
                                상쾌한 기운을 느낄 수 있습니다.
                                <br />
                                여름과 어울리는 밝고 신선한 향을 선사합니다.
                            </p>
                            <a className="btn" href="/">
                                더 자세히 보기
                                <span aria-hidden="true">
                                    <svg
                                        width="35"
                                        height="8"
                                        viewBox="0 0 65 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Card;
