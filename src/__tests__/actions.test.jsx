import * as actions from '../actions/index';

describe('actions', () => {
    it('should create an action to request ISS position', () => {
        const expectedAction = {
            type: actions.REQUEST_ISS_POSITION,
        }
        expect(actions.requestIssPosition()).toEqual(expectedAction)
    })
    it('should create an action to fetch ISS position success', () => {
        const expectedAction = {
            type: actions.FETCH_ISS_POSITION_SUCCESS,
            latitude: 1,
            longitude: 1
        }
        expect(actions.fetchIssPositionSuccess(1,1)).toEqual(expectedAction)
    })
    it('should create an action to request addres from coordinates', () => {
        const expectedAction = {
            type: actions.REQUEST_ADDRESS_FROM_COORDINATES,
        }
        expect(actions.requestAddressFromCoordinates()).toEqual(expectedAction)
    })
    it('should create an action to fetch addres from coordinates success', () => {
        const expectedAction = {
            type: actions.FETCH_ADDRESS_FROM_COORDINATES_SUCCESS,
            address: 'test'
        }
        expect(actions.fetchAddressFromCoordinatesSuccess('test')).toEqual(expectedAction)
    })
})
