import React from 'react';

const Section = ({ className, title, items, portfolioItems, content }) => {
    return (
        <section className={`section gsap__anim ${className}`}>
            <div className="parallax__wrapp">
                <div className="content">
                    {title && (
                        <div className={`${className}__wrapp`}>
                            <h2 className="title">
                <span className="title__wrapp">
                  <span className="title__img">
                    <img src="../img/star.svg" alt="Star Icon" />
                  </span>
                  <div className="title__txt">
                    <span className="title__t">the</span>
                    <span className="stroke">{title}</span>
                  </div>
                </span>
                            </h2>
                            {items && (
                                <ul className={`${className}__list`}>
                                    {items.map((item, index) => (
                                        <li key={index} className={`${className}__item`}>
                                            {item.text}
                                            <span className={`${className}__item-img`}>
                        <img src={item.img} alt={item.text} />
                      </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {portfolioItems && (
                        <ul className="portfolio__list">
                            {portfolioItems.map((img, index) => (
                                <li key={index} className="portfolio__item">
                                    <div className="portfolio__item-img">
                                        <img src={img} alt={`Portfolio Item ${index + 1}`} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                    {content && <div>{content}</div>}
                </div>
            </div>
        </section>
    );
};

export default Section;
