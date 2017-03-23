/**
 * Action types
 */
export const REQUEST_ISS_POSITION = 'REQUEST_ISS_POSITION'
export const FETCH_ISS_POSITION_SUCCESS = 'FETCH_ISS_POSITION_SUCCESS'
export const FETCH_ISS_POSITION_FAILURE = 'FETCH_ISS_POSITION_FAILURE'
export const REQUEST_ADDRESS_FROM_COORDINATES = 'REQUEST_ADDRESS_FROM_COORDINATES'
export const FETCH_ADDRESS_FROM_COORDINATES_SUCCESS = 'FETCH_ADDRESS_FROM_COORDINATES_SUCCESS'
export const FETCH_ADDRESS_FROM_COORDINATES_FAILURE = 'FETCH_ADDRESS_FROM_COORDINATES_FAILURE'
const GOOGLE_API_KEY = 'AIzaSyCJa8qqZssF6aSnzS4mOiM0gbbMyqg_zcc'
const GOOGLE_API_STATUS_ZERO_RESULTS = 'ZERO_RESULTS'
const GOOGLE_API_STATUS_OK = 'OK'

/**
 * Action Creators
 */
export const requestIssPosition = () => {
    return {
        type: REQUEST_ISS_POSITION,
    }
}

export const fetchIssPositionSuccess = (latitude, longitude) => {
    return {
        type: FETCH_ISS_POSITION_SUCCESS,
        latitude: latitude,
        longitude: longitude
    }
}

export const requestAddressFromCoordinates = () => {
    return {
        type: REQUEST_ADDRESS_FROM_COORDINATES,
    }
}

export const fetchAddressFromCoordinatesSuccess = (address) => {
    return {
        type: FETCH_ADDRESS_FROM_COORDINATES_SUCCESS,
        address: address,
    }
}

export const fetchIssPositionFailure = () => {
    return {
        type: FETCH_ISS_POSITION_FAILURE,
    }
}

export const fetchAddressFromCoordinatesFailure = () => {
    return {
        type: FETCH_ADDRESS_FROM_COORDINATES_FAILURE,
    }
}

export function fetchIssPosition() {
    return function (dispatch) {
        // const headers = new Headers()
        const myRequest = new Request('https://api.wheretheiss.at/v1/satellites/25544')

        dispatch(requestIssPosition())
        // headers.append('Accept', 'application/vnd.github.v3+json')

        return fetch(myRequest)
            .then(response => response.json())
            .then(
                json => {
                    dispatch(fetchIssPositionSuccess(json.latitude, json.longitude))
                    dispatch(fetchAddressFromCoordinates(json.latitude, json.longitude))
                    setTimeout(() => {
                        dispatch(fetchIssPosition())
                    }, 5000)
                }
            )
            .catch(ex => dispatch(fetchIssPositionFailure(ex)))
    }
}

export function fetchAddressFromCoordinates(latitude, longitude) {
    return function (dispatch) {
        const coordinateString = latitude.toString() + ',' + longitude.toString()
        // const headers = new Headers()
        const myRequest = new Request(
            'https://maps.googleapis.com/maps/api/geocode/json?language=en&latlng='
            + coordinateString
            + '&key='
            + GOOGLE_API_KEY
        )

        dispatch(requestAddressFromCoordinates())
        // headers.append('Accept', 'application/vnd.github.v3+json')

        return fetch(myRequest)
            .then(response => response.json())
            .then(
                json => {
                    GOOGLE_API_STATUS_OK === json.status
                        && dispatch(fetchAddressFromCoordinatesSuccess(json.results[0].formatted_address))
                    GOOGLE_API_STATUS_ZERO_RESULTS === json.status
                        && dispatch(fetchAddressFromCoordinatesSuccess(
                            'coordinates: ' + coordinateString + ' (address unknown)'
                    ))
                }
            )
            .catch(ex => dispatch(fetchAddressFromCoordinatesFailure(ex)))
    }
}
