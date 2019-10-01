import React, {Component} from 'react';
import {connect} from 'react-redux';

class Animation extends Component {

    render() {
        return (
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            Animation
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

// Photos.propTypes = {
//         getPhotos: PropTypes.func.isRequired,
//         photos: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
    jph: state.jph
});

export default connect(
    mapStateToProps
)(Animation);
