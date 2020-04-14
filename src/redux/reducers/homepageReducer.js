import {
    GET_HOMEPAGE_START,
    GET_HOMEPAGE_SUCCESS,
    GET_HOMEPAGE_FAILURE,
} from "../types"

const initialState = {
    isLoading: false,
    isSuccessful: false,
    totalGlobalStats : null,
    allCountriesData : null,
};


const homepageReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_HOMEPAGE_START:
            return {
                ...state,
                isLoading: true,
                isSuccessful : false,
            }

        case GET_HOMEPAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful : true,
                totalGlobalStats : action.payload, //TODO :: set only one key per action type 
                allCountriesData : action.payload,//TODO :: set only one key per action type 
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
