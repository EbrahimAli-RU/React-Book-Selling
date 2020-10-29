import * as actionType from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionType.AUTH_START
    }
}

export const authSuccess = (userId, token) => {
    return {
        type: actionType.AUTH_SUCCESS,
        userId: userId,
        token: token,
    }
}

export const authFail = (error) => {
    return {
        type: actionType.AUTH_FAIL,
        error: error
    }
}

export const authLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: actionType.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, 24 * 60 * 60 * 1000)
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
        }, 1500)
    }
}

export const auth = (formData, propsPro, url) => {
    return (dispatch) => {
        dispatch(authStart())
        axios.post(url, { ...formData }).then(res => {

            if (res.data.status === "success") {
                const expirationDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('userId', res.data.data.user._id)
                localStorage.setItem("expirationDate", expirationDate);
                dispatch(authSuccess(res.data.data.user._id, res.data.data.token))
                dispatch(checkAuthTimeout())
                if (url === '/user/signup') {
                    propsPro.history.push('/');
                } else if (url === '/user/signin') {
                    propsPro.history.goBack();
                }
            }
        }).catch(err => {
            console.log(err.response.data)
            dispatch(authFail(err.response.data))
            dispatch(closeError())
            // alert(err.response.data.message)
            console.log('Error Found', err.response)
        })
    }
}

export const checkAuthState = () => {
    return (dispatch) => {
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch(authLogout());
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"));
            if (expirationDate <= new Date()) {
                dispatch(authLogout());
            } else {
                const userId = localStorage.getItem("userId");
                dispatch(authSuccess(userId, token));
                dispatch(
                    checkAuthTimeout(
                        (expirationDate.getTime() - new Date().getTime()) / 1000
                    )
                );
            }
        }
    };
};