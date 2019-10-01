import axios from 'axios';

import {
    GET_PHOTOS,
    PHOTO_LOADING
} from './types';

// Get Photos
export const getPhotos = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then(res =>
            dispatch({
                type: GET_PHOTOS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PHOTOS,
                payload: null
            })
        );
};

// Set loading state
export const setPostLoading = () => {
    return {
        type: PHOTO_LOADING
    };
};

