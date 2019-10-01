import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class PhotoItem extends Component {

    render() {
        const { photo } = this.props;

        return (
            <div className="card">
                <LazyLoadImage className="card-img-top"
                     src={photo.thumbnailUrl}
                     alt={photo.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                    <p className="card-text"></p>
                </div>
            </div>
        );
    }
}

PhotoItem.propTypes = {
    photo: PropTypes.object.isRequired,
};

export default connect(null)(
    PhotoItem
);
