import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MyBox from './componenAdiwiyata/box'
import MyBelanja from './componenKeranjang/mainbelanja';


class Keranjang extends Component {
    render() {
        return (
            <div >
                <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-item nav-link" to="/">KERANJANG</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col">
                        <MyBelanja />
                    </div>
                </div>
            </div>

        )
    }
}

export default Keranjang