import * as actions from '../actions/index';
import issApi from '../reducers/issApi'

const defaultState = {
    latitude: undefined,
    longitude: undefined,
    done: false,
    fetchError: false,
}
const afterFetchState = {
    latitude: 2,
    longitude: 3,
    done: true,
    fetchError: false,
}
const fetchingState = {
    latitude: 1,
    longitude: 1,
    done: false,
    fetchError: false,
}

describe('issApi reducer', () => {
    it('should return the initial state', () => {
        expect(
            issApi(undefined, {})
        ).toEqual(defaultState)
    })

    it('should handle REQUEST_ADDRESS_FROM_COORDINATES', () => {
        expect(
            issApi(afterFetchState, {
                type: actions.REQUEST_ISS_POSITION
            })
        ).toEqual(
            {
                ...afterFetchState,
                done: false,
            }
        )
    })

    it('should handle FETCH_ISS_POSITION_SUCCESS', () => {
        expect(
            issApi(fetchingState, {
                type: actions.FETCH_ISS_POSITION_SUCCESS,
                latitude: 2,
                longitude: 3
            })
        ).toEqual(afterFetchState)
    })

    it('should handle FETCH_ISS_POSITION_FAILURE', () => {
        expect(
            issApi(fetchingState, {
                type: actions.FETCH_ISS_POSITION_FAILURE
            })
        ).toEqual(
            {
                ...fetchingState,
                done: true,
                fetchError: true
            }
        )
    })
})
