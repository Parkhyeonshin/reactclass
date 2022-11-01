import React from "react";

const textTitle = {
    titclass: "bm70",
    title: "ABOUT US",
};
const textInner = [
    {
        divClass: "t1",
        title: "글루텐 프리",
        desc: "알레르기를 유발할 수 있는 글루텐을 넣지 않음으로써, 남녀노소 모두가 쓸 수 있는 향수를 만듭니다.",
        btnLink: "/",
    },
    {
        divClass: "t2",
        title: "비건 향수",
        desc: "깨끗한 향수를 만들어 믿고 사용할 수 있는 제품을 만드는데 힘쓰고 있습니다. 친환경 원료만 사용해서 만든 대표적인 비건향수입니다.",
        btnLink: "/",
    },
    {
        divClass: "t3",
        title: "크룰티 프리",
        desc: "동물 실험을 거치지 않고 만들어지는 향수입니다. 생명을 소중히 하며 윤리적인 기업이 되고자 노력하고 있습니다.",
        btnLink: "/",
    },
    {
        divClass: "t4",
        title: "리사이클러블",
        desc: "자연을 침해하지 않는 범위 내에서 만들어진 클린의 제품들은 사용 후 다시 그대로 자연으로 돌아가는 전제품 ‘리사이클러블’을추구하고 있습니다.",
        btnLink: "/",
    },
    {
        divClass: "t5",
        title: "환경친화",
        desc: "최초 환경친화적인 지속 가능한 원료를 사용하여 깨끗한 지구 만들기에 앞장서고 있습니다.",
        btnLink: "/",
    },
    {
        divClass: "t6",
        title: "지속가능성",
        desc: "자연과 환경을 사랑하는 우리는 천연자원의 고갈을 피하기 위해 지속 가능한 원료를 사용합니다.",
        btnLink: "/",
    },
];
function TextInner({ divClass, title, desc, btnLink }) {
    return (
        <div className={`text ${divClass}`}>
            <h3 className="text__title">{title}</h3>
            <p className="text__desc">{desc}</p>
            <a className="text_btn" href={`${btnLink}`}>
                더보기
            </a>
        </div>
    );
}

function Text({ attr }) {
    return (
        <>
            <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]} `}>
                <span className="blind">텍스트 유형01</span>
                <h2 className={`${textTitle.titclass}`}>{textTitle.title}</h2>
                <div className={`text__inner ${attr[2]}`}>
                    {textInner.map((e, i) => (
                        <TextInner key={i} divClass={e.divClass} title={e.title} desc={e.desc} btnLink={e.btnLink} />
                    ))}

                    {/* <div className="text t1">
                        <h3 className="text__title">글루텐 프리</h3>
                        <p className="text__desc">알레르기를 유발할 수 있는 글루텐을 넣지 않음으로써, 남녀노소 모두가 쓸 수 있는 향수를 만듭니다.</p>
                        <a className="text_btn" href="/">
                            더보기
                        </a>
                    </div>
                    <div className="text t2">
                        <h3 className="text__title">비건 향수</h3>
                        <p className="text__desc">
                            끗한 향수를 만들어 믿고 사용할 수 있는 제품을 만드는데 힘쓰고 있습니다. 친환경 원료만 사용해서 만든 대표적인 비건
                            향수입니다.
                        </p>
                        <a className="text_btn" href="/">
                            더보기
                        </a>
                    </div>
                    <div className="text t3">
                        <h3 className="text__title">크룰티 프리</h3>
                        <p className="text__desc">
                            동물 실험을 거치지 않고 만들어지는 향수입니다. 생명을 소중히 하며 윤리적인 기업이 되고자 노력하고 있습니다.
                        </p>
                        <a className="text_btn" href="/">
                            더보기
                        </a>
                    </div>
                    <div className="text t4">
                        <h3 className="text__title">리사이클러블 </h3>
                        <p className="text__desc">
                            자연을 침해하지 않는 범위 내에서 만들어진 클린의 제품들은 사용 후 다시 그대로 자연으로 돌아가는 전제품 ‘리사이클러블’을
                            추구하고 있습니다.
                        </p>
                        <a className="text_btn" href="/">
                            더보기
                        </a>
                    </div>
                    <div className="text t5">
                        <h3 className="text__title">환경친화 </h3>
                        <p className="text__desc">최초 환경친화적인 지속 가능한 원료를 사용하여 깨끗한 지구 만들기에 앞장서고 있습니다.</p>
                        <a className="text_btn" href="/">
                            더보기
                        </a>
                    </div>
                    <div className="text t6">
                        <h3 className="text__title">지속가능성 </h3>
                        <p className="text__desc">자연과 환경을 사랑하는 우리는 천연자원의 고갈을 피하기 위해 지속 가능한 원료를 사용합니다.</p>
                        <a className="text_btn" href="/">
                            더보기
                        </a>
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default Text;
