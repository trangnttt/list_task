import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer/index';


class Layout extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout;