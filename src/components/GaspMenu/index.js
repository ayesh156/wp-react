import React, { useState } from 'react';
import './style.css'; // Include your CSS for styling
import './normalize.css'; // Include your CSS for styling

const HoverMenu = () => {
    const [activeImgId, setActiveImgId] = useState(null); // State to track which image is active

    const handleMouseEnter = (id) => {
        setActiveImgId(id);
    };

    const handleMouseLeave = () => {
        setActiveImgId(null);
    };

    return (
        <div className="wrapp">
            {/* Images */}
            <div className="menu-img">
                <img
                    id="1-bg__img"
                    src="./img/menu1.jpg"
                    alt="Earth"
                    className={activeImgId === 1 ? 'active' : ''}
                />
                <img
                    id="2-bg__img"
                    src="img/menu2.jpg"
                    alt="Moon"
                    className={activeImgId === 2 ? 'active' : ''}
                />
                <img
                    id="3-bg__img"
                    src="img/menu3.jpg"
                    alt="Mars"
                    className={activeImgId === 3 ? 'active' : ''}
                />
                <img
                    id="4-bg__img"
                    src="img/menu4.jpg"
                    alt="Jupiter"
                    className={activeImgId === 4 ? 'active' : ''}
                />
            </div>

            {/* Menu Items */}
            <ul className="menu">
                <li
                    className="menu__item"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="#" className="menu__link">
                        Earth
                    </a>
                </li>
                <li
                    className="menu__item"
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="#" className="menu__link">
                        Moon
                    </a>
                </li>
                <li
                    className="menu__item"
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="#" className="menu__link">
                        Mars
                    </a>
                </li>
                <li
                    className="menu__item"
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="#" className="menu__link">
                        Jupiter
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default HoverMenu;
