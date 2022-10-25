import React from "react";

function footer(props) {
    return (
        <>
            <footer id="footerType" className={`footer__wrap ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}>
                <h2 className="blind">푸터 영역</h2>
                <div className={`footer__inner ${props.attr[3]}`}>
                    <div className="footer__menu">
                        <div>
                            <h3>시즌</h3>
                            <ul>
                                <li>
                                    <a href="/">봄</a>
                                </li>
                                <li>
                                    <a href="/">여름</a>
                                </li>
                                <li>
                                    <a href="/">가을</a>
                                </li>
                                <li>
                                    <a href="/">겨울</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>회사 소개</h3>
                            <ul>
                                <li>
                                    <a href="/">이용 약관</a>
                                </li>
                                <li>
                                    <a href="/">광고 제휴</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>출처</h3>
                            <ul>
                                <li>
                                    <a href="/">비레디</a>
                                </li>
                                <li>
                                    <a href="/">UNSPLASH</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>메뉴</h3>
                            <ul>
                                <li>
                                    <a href="/">메뉴</a>
                                </li>
                                <li>
                                    <a href="/">신제품</a>
                                </li>
                                <li>
                                    <a href="/">퍼스널 향수</a>
                                </li>
                                <li>
                                    <a href="/">베스트셀러</a>
                                </li>
                                <li>
                                    <a href="/">ABOUT US</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>회원</h3>
                            <ul>
                                <li>
                                    <a href="/">회원 혜택</a>
                                </li>
                                <li>
                                    <a href="/">회원 후기</a>
                                </li>
                                <li>
                                    <a href="/">공지사항</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>고객지원</h3>
                            <ul>
                                <li>
                                    <a href="/">A/S</a>
                                </li>
                                <li>
                                    <a href="/">FAQ</a>
                                </li>
                                <li>
                                    <a href="/">1:1 문의</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__right">
                    2022 SSHINY. Portfolio is Power
                    <br />
                    All rights reserved.
                </div>
            </footer>
        </>
    );
}

export default footer;
