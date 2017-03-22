import * as actions from '../actions/index';

const defaultState = {
    address: "",
    done: false
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
const googleMapsApi = (state = defaultState, action) => {
    switch (action.type) {
        case actions.REQUEST_ISS_POSITION: {
            return { ...state,  done: false }
        }

        case actions.FETCH_ADDRESS_FROM_COORDINATES_SUCCESS: {
            return {
                ...state,
                address: action.address,
                done: true
            }
        }

        default:
            return state
    }
}

export default googleMapsApi
