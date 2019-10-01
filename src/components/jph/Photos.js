import React, {Component} from 'react';
import {connect} from 'react-redux';
import PhotoFeed from './PhotoFeed';
import Spinner from '../common/Spinner';
import { getPhotos } from "../../actions/jphActions";

class Photos extends Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const { photos, loading } = this.props.jph;
        let photoContent;
        if(photos === null || loading){
            photoContent = <Spinner/>
        } else {
            photoContent = <PhotoFeed photos={photos} />
        }

        return (
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {photoContent}
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
    mapStateToProps,
    { getPhotos }
)(Photos);
