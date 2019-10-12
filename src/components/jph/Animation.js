import React, {Component} from 'react';

class Animation extends Component {
    render() {
        return (
            <div className="animation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <button className="btn grow">
                               Grow
                            </button>
                        </div>
                        <div className="col-md-3">
                            <button className="btn shrink">
                                Shrink
                            </button>
                        </div>
                        <div className="col-md-3">
                            <button className="btn color-change">
                                Color
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="smile">☺</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Animation;
