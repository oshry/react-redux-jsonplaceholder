import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Navbar extends Component {
    render() {
        return (
            <div id="sidebar">
                <div className="sidebar-header">
                    <h3>trusstor</h3>
                </div>
                <div className="after"></div>
                <div className="user-icon rounded"></div>
                <ul className="list-unstyled components">
                    <p>Jonas Rogerson</p>
                    {/*<li className="active">*/}
                        {/*<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"*/}
                           {/*className="dropdown-toggle">Home</a>*/}
                        {/*<ul className="collapse list-unstyled" id="homeSubmenu">*/}
                            {/*<li>*/}
                                {/*<a href="#">Home 1</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<a href="#">Home 2</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<a href="#">Home 3</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <Link className="nav-link" to="/photos">photos</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/search">search</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/animations">animations</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect(null)(Navbar);
