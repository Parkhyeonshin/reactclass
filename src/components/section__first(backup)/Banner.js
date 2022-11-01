import React from "react";

function Banner(props) {
    return (
        <>
            <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
                <h2 className="blind">배너 영역</h2>
                <div className="banner__inner">
                    <h3 className="title">Daily Perfume</h3>
                    <p className="desc">
                        따스한 일요일 아침 화이트 셔츠의 두근거리는 설렘
                        <a href="/" title="새로운 페이지 열림" target="_blank">
                            sshin4882.tistory.com
                        </a>
                    </p>
                    <span className="small">SSHINY PERFUME</span>
                </div>
            </section>
        </>
    );
}

export default Banner;
