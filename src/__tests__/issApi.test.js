import * as actions from '../actions/index';
import issApi from '../reducers/issApi'

const defaultState = {
    latitude: undefined,
    longitude: undefined,
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
            issApi(defaultState, {
                type: actions.REQUEST_ADDRESS_FROM_COORDINATES
            })
        ).toEqual(defaultState)
    })
})