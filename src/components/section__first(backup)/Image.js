import React from "react";

const imageTitle = {
    title: "화사한 봄꽃처럼",
    desc: "햇살이 반기는 맑은 하늘과 포근한 공기, 그 사이로 스며든 기분 좋은 향조들.",
};

const ImageText = [
    {
        title: "SPRING COOLTON",
        desc: "연분홍빛 꽃을 닮은 부드럽고 사랑스러운 향기.\n 로즈와 스위트 재스민삼박, 프리지어의 폭발적인 달콤함을 느낄 수 있습니다.",
        className: "img1",
    },
    {
        title: "FLOWER BOM",
        desc: " 생동감이 폭발하는 봄을 닮은 향수.\n 아이리스와 은방울꽃으로 시작해 센티폴리아 로즈, 우드 노트로 끝나는 향기를 느껴보세요.",
        className: "img2",
    },
];

function Image(props) {
    return (
        <>
            <section id="imgType" className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}>
                <h2>{imageTitle.title}</h2>
                <p>{imageTitle.desc} </p>
                <div className={`image__inner ${props.attr[2]} image__box`}>
                    <article className={`image ${ImageText[0].className}`}>
                        <h3 className="image__title">{ImageText[0].title}</h3>
                        <p className="image__desc">
                            {ImageText[0].desc}
                            <br />
                        </p>
                        <a className="image__btn" href="/" title="자세히 보기">
                            자세히 보기
                        </a>
                    </article>
                    <article className={`image ${ImageText[1].className}`}>
                        <h3 className="image__title">{ImageText[1].title}</h3>
                        <p className="image__desc">{ImageText[1].desc}</p>
                        <a className="image__btn yellow" href="/" title="자세히 보기">
                            자세히 보기
                        </a>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Image;
