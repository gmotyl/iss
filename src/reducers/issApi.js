import * as actions from '../actions/index';

const defaultState = {
    latitude: undefined,
    longitude: undefined,
    done: false
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
const issApi = (state = defaultState, action) => {
    switch (action.type) {
        case actions.REQUEST_ADDRESS_FROM_COORDINATES: {
            return { ...state,  done: false }
        }

        case actions.FETCH_ISS_POSITION_SUCCESS: {
            return {
                ...state,
                latitude: action.latitude,
                longitude: action.longitude,
            }
        }

        default:
            return state
    }
}

export default issApi
