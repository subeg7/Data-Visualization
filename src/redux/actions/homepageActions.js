import { api } from '../../services/api';
import { baseUrl,countriesEndpoint } from '../../services/apiLink';
import store from '../store';

import {
    GET_COUNTRIES_DATA_START,
    GET_COUNTRIES_DATA_SUCCESS,
    GET_COUNTRIES_DATA_FAILURE
} from "../types";

export const getHomePageData = (countryQuery) => async dispatch => {
    // const countryQuery = countries //; //TODO :: implode countries into comma concatenation

    try {
        const loading = store.getState().homepage.isLoading;
        if (loading) {
            return; //api request already made
        }
        dispatch({
            type: GET_COUNTRIES_DATA_START,
        });
        const res = await api.get(baseUrl+countriesEndpoint+countryQuery);
        dispatch({
            type: GET_COUNTRIES_DATA_SUCCESS,
            payload: res.data,
        });

    } catch (error) {
        dispatch({
            type: GET_COUNTRIES_DATA_FAILURE,
            payload: error,
        });
    }

}