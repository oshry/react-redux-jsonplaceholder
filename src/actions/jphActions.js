import axios from 'axios';

import {
    GET_PHOTOS,
    PHOTO_LOADING,
    GET_SEARCH,
    SEARCH_LOADING,
    SET_COMMENTS
} from './types';

// Search
export const searchComments = (q) => dispatch => {

    dispatch(setCommentLoading());
    axios
        .get(`https://jsonplaceholder.typicode.com/comments`)
        .then( res => {
            let data = res.data;
            let output = data.filter(function (el) {
                return el.name.includes(q)
            });
            dispatch(setComments(output));
            return output;
        }
        )
        .catch(err => {
                dispatch({
                    type: GET_SEARCH,
                    payload: null
                })
            }
        );
};

// Set logged in user
export const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        payload: comments
    }
}

// Get Photos
export const getPhotos = () => dispatch => {
    dispatch(setPhotoLoading());
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
export const setPhotoLoading = () => {
    return {
        type: PHOTO_LOADING
    };
};
// Set loading state
export const setCommentLoading = () => {
    return {
        type: SEARCH_LOADING
    };
};
