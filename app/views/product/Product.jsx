require('./pr-feature.scss');
require('./pr-priceGrid.scss');

import React from 'react';

class Product extends React.Component {
    render() {
        return <div>
            <div className="pr-feature">
                <div className="pr-feature__inner">
                    <div className="pr-feature__mobile-title">
                        StateQuest Hydra Thermos 500ml
                    </div>
                    <div className="pr-feature__image-container">
                        <picture>
                            <source srcSet="http://i63.tinypic.com/334oz28.jpg" media="(min-width: 1024px)" />
                            <img src="http://i65.tinypic.com/152z3ms.jpg"
                                className="pr-feature__image" />
                        </picture>
                    </div>
                    <div className="pr-feature__body">
                        <span className="pr-feature__pre-title">
                            30 Days Returns: No Questions Asked
                        </span>
                        <h1 className="pr-feature__title">
                            Keep your drink comfortingly hot as you hike
                            through the crisp winter country sides
                        </h1>
                        <div className="pr-feature__description">
                            <p>Keep your drink hot or cold for
                                up to 8 hours with the stainless steel
                                double-wall and vacuum insulation.</p>
                            <p>No leaks with silicone pad
                                screw cap</p>
                            <p>Fit in your backpack or bag with
                                25cm fit</p>
                        </div>
                        <div className="pr-priceGrid">
                            <div className="pr-priceGrid__price">
                                £38
                            </div>
                            <div className="pr-priceGrid__stock">
                                0 in stock
                            </div>
                            <div className="pr-priceGrid__button-wrapper">
                                <button className="pr-priceGrid__buy-button">
                                    PRE-ORDER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pr-feature pr-feature--reversed">
                <div className="pr-feature__inner">
                    <div className="pr-feature__image-container">
                        <img src="http://i64.tinypic.com/1pcpcn.jpg" />
                    </div>
                    <div className="pr-feature__body">
                        <div className="pr-feature__description">
                            <h2>Technical Specs</h2>
                            <ul>
                                <li>Stainless steel</li>
                                <li>Vacuum insulation</li>
                                <li>Double walled container</li>
                                <li>500ml capacity</li>
                                <li>335g weight</li>
                                <li>25cm heght</li>
                                <li>8 cm diameter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Product;
