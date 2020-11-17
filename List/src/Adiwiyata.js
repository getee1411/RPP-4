import React, { Component } from 'react';
import Main from './componenAdiwiyata/main'
import { Link } from 'react-router-dom'
import MyBox from './componenAdiwiyata/box'

class Adiwiyata extends Component {
    render() {
        return (
            <div >
                <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-item nav-link" to="/">Beranda</Link>
                                <Link class="nav-item nav-link" to="/galery">Galery</Link>
                                <Link class="nav-item nav-link" to="/kalender">Kalender</Link>
                                <Link class="nav-item nav-link" to="/agenda">Agenda</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* GRID BODY 1 */}
                <div className="row">
                    <div className="col">
                        <Main />
                    </div>
                </div>
            </div>

        )
    }
}

export default Adiwiyata