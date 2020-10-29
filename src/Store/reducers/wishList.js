
const initialState = {
    success: false,
    error: false,
    message: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WISH_LIST_SUCCESSFULL_MESSAGE':
            return {
                ...state,
                success: true,
                message: action.message,
                error: false
            }
        case 'ADD_WISH_LIST_WARNING_MESSAGE':
            return {
                ...state,
                error: true,
                message: action.message,
                success: false
            }
        case 'SET_DEFAULT':
            return {
                ...state,
                error: false,
                success: false,
                message: null
            }
        default: {
            return state
        }
    }
    return state;
}

export default reducer