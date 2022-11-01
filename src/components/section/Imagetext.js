import React from "react";

const imgtxtTitle = {
    title: "당신의 향수에\n만족하시나요?",
    desc: "수 만개의 향수 중 당신의 향수를 찾는 것\n그것은 운명과도 같은 일입니다.",
    listOne: "당신만의 향수",
    listTwo: "무료로 시향하세요",
    listThree: "당일 주문 / 당일 출고",
    listFour: "당신만의 향수",
    listFive: "무료로 시향하세요",
    listSix: "당일 주문 / 당일 출고",
    listLink1: "/",
    listLink2: "/",
    listLink3: "/",
    listLink4: "/",
    listLink5: "/",
    listLink6: "/",
};
const imgtxtImg = [
    {
        imgClassName: "img1",
        btnLink: "/",
        btnClass: "",
        btndesc: "PERSONAL",
    },
    {
        imgClassName: "img2",
        btnLink: "/",
        btnClass: "blue",
        btndesc: "CUSTOM",
    },
];

function ImgtxtInner({ imgClassName, btnLink, btnClass, btndesc }) {
    return (
        <div className={`imgText__img ${imgClassName}`}>
            <a href={`${btnLink}`} className={`${btnClass}`}>
                {btndesc}
            </a>
        </div>
    );
}

function Imagetext({ attr }) {
    return (
        <>
            <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} `}>
                <h2 className="blind">유용한 사이트 살펴보기</h2>
                <div className={`imgText__inner ${attr[3]}`}>
                    <div className="imgText__txt">
                        <span className="blind">이미지 텍스트 유형01</span>
                        <h3>{imgtxtTitle.title}</h3>
                        <p>{imgtxtTitle.desc}</p>
                        <ul>
                            <li>
                                <a href={`${imgtxtTitle.listLink1}`}>{imgtxtTitle.listOne}</a>
                            </li>
                            <li>
                                <a href={`${imgtxtTitle.listLink2}`}>{imgtxtTitle.listTwo}</a>
                            </li>
                            <li>
                                <a href={`${imgtxtTitle.listLink3}`}>{imgtxtTitle.listThree}</a>
                            </li>
                            <li>
                                <a href={`${imgtxtTitle.listLink4}`}>{imgtxtTitle.listFour}</a>
                            </li>
                            <li>
                                <a href={`${imgtxtTitle.listLink5}`}>{imgtxtTitle.listFive}</a>
                            </li>
                            <li>
                                <a href={`${imgtxtTitle.listLink6}`}>{imgtxtTitle.listSix}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="imgbox">
                        {imgtxtImg.map((e, i) => (
                            <ImgtxtInner key={i} imgClassName={e.imgClassName} btnLink={e.btnLink} btnClass={e.btnClass} btndesc={e.btndesc} />
                        ))}
                        ;
                        {/* <div className="imgText__img img1">
                            <a href="/">PERSONAL</a>
                        </div>
                        <div className="imgText__img img2">
                            <a href="/" className="blue">
                                CUSTOM
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Imagetext;
