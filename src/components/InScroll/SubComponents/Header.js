import React from 'react';

const Header = ({ title = 'Infinite Scroll' }) => {
    return (
        <header className="header gsap__anim">
            <div className="parallax__wrapp">
                <div className="header__bg">
                    <img src="../img/pirat1.png" alt="Background" />
                    <img src="../img/pirat1.png" alt="Background" />
                </div>
                <div className="content">
                    <h1 className="title title-p">
                        {title}
                        <span className="stroke">Scroll</span>
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
