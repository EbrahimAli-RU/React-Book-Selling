// import * as actionType from '../actions/actionTypes'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH__START':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'AUTH_SUCCESS':
            return {
                ...state,
                userId: action.userId,
                token: action.token,
                loading: false,
            }
        case 'AUTH_FAIL':
            return {
                ...state,
                loading: false,
                error: action.error,
                userId: null,
                token: null
            }
        case 'AUTH_LOGOUT':
            return {
                ...state,
                userId: null,
                token: null,
                error: null
            }
        case 'SET_DEFAULT':
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}

export default reducer