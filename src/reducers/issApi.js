import * as actions from '../actions/index';

const defaultState = {
    latitude: undefined,
    longitude: undefined,
    done: false,
    fetchError: false,
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
const issApi = (state = defaultState, action) => {
    switch (action.type) {
        case actions.REQUEST_ISS_POSITION: {
            return {
                ...state,
                fetchError: false,
                done: false
            }
        }

        case actions.FETCH_ISS_POSITION_SUCCESS: {
            return {
                ...state,
                latitude: action.latitude,
                longitude: action.longitude,
                done: true,
            }
        }

        case actions.FETCH_ISS_POSITION_FAILURE: {
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

export default issApi
