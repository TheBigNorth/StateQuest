require('./navigation.scss');
require('./nav-TopBar.scss');
require('./nav-Menu.scss');

import React from 'react';
import {Link, IndexLink} from 'react-router';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuActive: false
        }
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation() {
        this.setState((prevState, props) => {
            return { isMenuActive: !prevState.isMenuActive }
        });
        console.log(this.state);
    }

    render() {
        return <header className="nav">
            <div className="nav-TopBar">
                <div className="nav-TopBar__central-msg">
                    88 Day Free Returns
                </div>
            </div>
            <div className="nav__inner">
                <button onClick={this.toggleNavigation}
                    className={"hamburger hamburger--squeeze " + (this.state.isMenuActive ? 'is-active' : '')} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <IndexLink to="/" className="nav__logo" activeClassName="active" onlyActiveOnIndex={true}>
                    SQ
                </IndexLink>
                <Link to="/checkout" className="nav__cart" activeClassName="active">
                    <span className="nav__cart-text">
                        Cart 0
                    </span>
                </Link>
                <div className="nav__divider"></div>
                <ul className={"nav-Menu " + (this.state.isMenuActive ? 'nav-Menu--active' : '')}>
                    <li className="nav-Menu__item">
                        <Link to="/products/hydra" activeClassName="active" className="nav-Menu__link">
                            Hydra
                        </Link>
                    </li>
                    <li className="nav-Menu__item">
                        <Link to="/about" activeClassName="active" className="nav-Menu__link">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-Menu__item">
                        <Link to="contact" activeClassName="active" className="nav-Menu__link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>;
    }
}

export default Navigation;
