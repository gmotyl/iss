import * as actions from '../actions/index';

const defaultState = {
    address: "",
    done: false,
    fetchError: false
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
const googleMapsApi = (state = defaultState, action) => {
    switch (action.type) {
        case actions.REQUEST_ADDRESS_FROM_COORDINATES: {
            return { ...state,  done: false }
        }

        case actions.FETCH_ADDRESS_FROM_COORDINATES_SUCCESS: {
            return {
                ...state,
                address: action.address,
                done: true
            }
        }

        case actions.FETCH_ADDRESS_FROM_COORDINATES_FAILURE: {
            return {
                ...state,
                done: true,
                fetchError: true
            }
        }

        default:
            return state
    }
}

export default googleMapsApi
