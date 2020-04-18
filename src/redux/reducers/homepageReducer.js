import {
    GET_COUNTRIES_DATA_START,
    GET_COUNTRIES_DATA_SUCCESS,
    GET_COUNTRIES_DATA_FAILURE,
} from "../types"

const initialState = {
    isLoading: false,
    isSuccessful: false,
    data: [],
};


const homepageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_DATA_START:
            return {
                ...state,
                isLoading: true,
                isSuccessful: false,
            }

        case GET_COUNTRIES_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: Array.isArray(action.payload) ? action.payload : [action.payload],
            }

        case GET_COUNTRIES_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccessful: false,
                data: null,
            }
        default:
            console.log(action.type + " not matched in reducer");
            return state;
    }
}

export default homepageReducer;
