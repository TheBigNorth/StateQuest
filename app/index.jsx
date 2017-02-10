require('./style.scss');

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import About from './views/about/About.jsx';
import Home from './views/home/Home.jsx';
import Product from './views/product/Product.jsx';
import Contact from './views/contact/Contact.jsx';
import Checkout from './views/checkout/Checkout.jsx';
import Navigation from './components/navigation/Navigation.jsx';

class App extends React.Component {
  render () {
    return <div>
        <Navigation />
        {/* add this */}
        {this.props.children}
    </div>;
  }
}

class NoMatch extends React.Component {
    render() {
        return <div>
            <h1>This Page Does Not Exist</h1>
        </div>;
    }
}

//render(<App/>, document.getElementById('app'));

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/products/:name" component={Product} />
        <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))
