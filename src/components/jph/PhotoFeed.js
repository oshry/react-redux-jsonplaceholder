import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';

class PhotoFeed extends Component {
    render() {
        const { photos } = this.props;

        const Grid = (
            <div className="my-row">
                {photos.map(photo => <div className="my-col"><PhotoItem key={photo._id} photo={photo} /></div>)}
            </div> );

        return Grid
    }
}

PhotoFeed.propTypes = {
    photos: PropTypes.array.isRequired
}

export default PhotoFeed;
