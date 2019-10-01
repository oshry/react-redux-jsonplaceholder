import React, {Component} from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    componentDidMount() {}
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Hello</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null)(Landing);
