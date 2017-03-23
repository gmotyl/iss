import {combineReducers} from 'redux';
import issApi from './issApi';
import googleMapsApi from './googleMapsApi';

const mainReducer = combineReducers({
    issApi,
    googleMapsApi
})

export default mainReducer