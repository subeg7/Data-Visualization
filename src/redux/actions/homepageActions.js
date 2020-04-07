import { api } from '../../services/api';
import { dataUrl } from '../../services/apiLink';
import store from '../store';

import {
    GET_HOMEPAGE_START,
    GET_HOMEPAGE_SUCCESS,
    GET_HOMEPAGE_FAILURE
} from "../types";

export const getHomePageData = () => async dispatch => {
    try {
        const loading = store.getState().homepage.isLoading;
        if (loading) {
            return; //api request already made
        }
        dispatch({
            type: GET_HOMEPAGE_START,
        });
        const res = await api.get(dataUrl);
        dispatch({
            type: GET_HOMEPAGE_SUCCESS,
            payload: res.data,
        });

    } catch (error) {
        dispatch({
            type: GET_HOMEPAGE_FAILURE,
            payload: error,
        });
    }

}