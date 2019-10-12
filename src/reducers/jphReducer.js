import {GET_PHOTO, GET_PHOTOS, PHOTO_LOADING, GET_SEARCH, SEARCH_LOADING, SET_COMMENTS} from "../actions/types";

const initialState = {
    photos: [],
    comments: [],
    loading: false
};

export default function (state = initialState, action) {
    switch(action.type){
        case SEARCH_LOADING:
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
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            };



        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                loading: false
            };
        case GET_SEARCH:
            return {
                ...state,
                search: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
