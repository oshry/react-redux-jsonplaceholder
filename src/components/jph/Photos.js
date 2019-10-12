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
                    {photoContent}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    jph: state.jph
});

export default connect(
    mapStateToProps,
    { getPhotos }
)(Photos);
