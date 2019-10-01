import {GET_PHOTO, GET_PHOTOS, PHOTO_LOADING} from "../actions/types";

const initialState = {
    photos: [],
    loading: false
};

export default function (state = initialState, action) {
    switch(action.type){
        case PHOTO_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PHOTO:
            return {
                ...state,
                photos: action.payload,
                loading: false
            };
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
