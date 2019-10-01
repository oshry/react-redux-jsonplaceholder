import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';

class PhotoFeed extends Component {
    render() {
        const { photos } = this.props;

        return photos.map(photo => <PhotoItem key={photo._id} photo={photo} />)
    }
}

PhotoFeed.propTypes = {
    photos: PropTypes.array.isRequired
}

export default PhotoFeed;
