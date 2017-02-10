import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
        return <div>
            <Link to="/products/hydra">
                <img src="http://i65.tinypic.com/2n9c038.jpg" />
            </Link>
        </div>;
    }
}

export default Home;
