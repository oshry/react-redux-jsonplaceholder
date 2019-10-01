import React, {Component} from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import Landing from '../layout/Landing'
import Photos from "../jph/Photos";
import Search from "../jph/Search";
import Animations from "../jph/Animation";

class Content extends Component {
    componentDidMount() {}
    render() {
        return (
            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <button type="button" id="sidebarCollapse" onClick={
                            ()=>{
                                var element = document.getElementById("sidebar");
                                element.classList.toggle("active");
                            }
                        } className="btn btn-info">
                            <i className="fas fa-align-left"></i>
                            <span>Toggle Sidebar</span>
                        </button>

                    </div>
                </nav>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/photos" component={Photos}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/animations" component={Animations}/>
            </div>
        );
    }
}

export default connect(null)(Content);
