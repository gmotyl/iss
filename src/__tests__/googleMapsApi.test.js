import * as actions from '../actions/index';
import googleMapsApi from '../reducers/googleMapsApi'

const defaultState = {
    address: "",
    done: false,
    fetchError: false
}

describe('googleMapsApi reducer', () => {
    it('should return the initial state', () => {
        expect(
            googleMapsApi(undefined, {})
        ).toEqual(defaultState)
    })

    it('should handle REQUEST_ADDRESS_FROM_COORDINATES', () => {
        expect(
            googleMapsApi({ ...defaultState, done: true}, {
                type: actions.REQUEST_ADDRESS_FROM_COORDINATES
            })
        ).toEqual(
            {
                ...defaultState,
                done: false,
            }
        )
    })

    it('should handle FETCH_ADDRESS_FROM_COORDINATES_SUCCESS', () => {
        expect(
            googleMapsApi(defaultState, {
                type: actions.FETCH_ADDRESS_FROM_COORDINATES_SUCCESS,
                address: "test"
            })
        ).toEqual(
            {
                ...defaultState,
                address: "test",
                done: true
            }
        )
    })

    it('should handle FETCH_ADDRESS_FROM_COORDINATES_FAILURE', () => {
        expect(
            googleMapsApi(defaultState, {
                type: actions.FETCH_ADDRESS_FROM_COORDINATES_FAILURE
            })
        ).toEqual(
            {
                ...defaultState,
                done: true,
                fetchError: true
            }
        )
    })
})
