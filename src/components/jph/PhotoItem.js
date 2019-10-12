import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class PhotoItem extends Component {

    render() {
        const {photo } = this.props;

        return (
            <div className="">
                <LazyLoadImage className=""
                     src={photo.thumbnailUrl}
                     alt={photo.title}
                />
                <div className="">
                    <h5 className="">{photo.title}</h5>
                    <p className=""></p>
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
