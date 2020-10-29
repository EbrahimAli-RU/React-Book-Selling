import * as actionType from './actionTypes'
import axios from 'axios'

export const showSuccessfullMessage = (message) => {
    return {
        type: actionType.ADD_WISH_LIST_SUCCESSFULL_MESSAGE,
        message: message
    }
}

export const showWarningMessage = (message) => {
    return {
        type: actionType.ADD_WISH_LIST_WARNING_MESSAGE,
        message: message
    }
}

export const setDefault = () => {
    return {
        type: actionType.SET_DEFAULT
    }
}
export const closeError = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(setDefault())
        }, 1000)
    }
}

export const addToWishList = (id, token) => {
    return dispatch => {
        axios.post('/user/addWishList', { id: id }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            dispatch(showSuccessfullMessage(res.data.message));
            dispatch(closeError())
        }).catch(err => {
            console.log(err.response.data.message)
            dispatch(showWarningMessage(err.response.data.message))
            dispatch(closeError())
        })

    }
}