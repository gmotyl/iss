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
        case actions.REQUEST_ADDRESS_FROM_COORDINATES: {
            return {
                ...state,
                done: false,
                fetchError: false
            }
        }

        case actions.FETCH_ISS_POSITION_SUCCESS: {
            return {
                ...state,
                done: true,
                latitude: action.latitude,
                longitude: action.longitude,
            }
        }

        case actions.FETCH_ISS_POSITION_FAILURE: {
            console.error('FETCH_ISS_POSITION_FAILURE')
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
