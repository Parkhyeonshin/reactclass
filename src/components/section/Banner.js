import React from "react";

const BannerText = {
    title: "Daily Perfume",
    desc: "따스한 일요일 아침 화이트 셔츠의 두근거리는 설렘",
    aLink: "/",
    email: "sshin4882.tistory.com",
    smalldesc: "SSHINY PERFUME",
};

function Banner(props) {
    return (
        <>
            <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
                <h2 className="blind">배너 영역</h2>
                <div className="banner__inner">
                    <h3 className="title">{BannerText.title}</h3>
                    <p className="desc">
                        {BannerText.desc}
                        <a href={`${BannerText.aLink}`} title="새로운 페이지 열림" target="_blank" rel="noreferrer">
                            {BannerText.email}
                        </a>
                    </p>
                    <span className="small">{BannerText.smalldesc}</span>
                </div>
            </section>
        </>
    );
}

export default Banner;
