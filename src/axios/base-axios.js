import axios from 'axios'
import store from '../Store/store'
const state = store.getState();
const token = state.token
console.log(state, token)
console.log(localStorage.getItem('token'))
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

export default axios