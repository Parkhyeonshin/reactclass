import React from "react";

function Header(props) {
    return (
        <>
            <header id="headerType" className={`header__wrap ${props.fonts}`}>
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="/">
                            SSHINY<em> PERFUME</em>
                        </a>
                    </div>
                    <nav className="header__menu">
                        <ul>
                            <li>
                                <a className="active" href="#sliderType">
                                    MAIN
                                </a>
                            </li>
                            <li>
                                <a href="#imgType">NEW</a>
                            </li>
                            <li>
                                <a href="#imgTextType">PERSONAL</a>
                            </li>
                            <li>
                                <a href="#cardType">BEST</a>
                            </li>
                            <li>
                                <a href="#bannerType">DAILY</a>
                            </li>
                            <li>
                                <a href="#textType">ABOUT</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__member">
                        <a href="/">LOGIN</a>
                    </div>
                    <div className="header__ham">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
