import {
    GET_HOMEPAGE_START,
    GET_HOMEPAGE_SUCCESS,
    GET_HOMEPAGE_FAILURE,
} from "../types"

const initialState = {
    isLoading: false,
    country: [],
    total: [],
    lastHour: [],
    today: [],
};


const homepageReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_HOMEPAGE_START:
            return {
                ...state,
                isLoading: true
            }

        case GET_HOMEPAGE_SUCCESS:
            return {
                ...state,
                isLoading: false
            }

        case GET_HOMEPAGE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            console.log(action.type + " not matched in reducer");
            return state;
    }
}

export default homepageReducer;
