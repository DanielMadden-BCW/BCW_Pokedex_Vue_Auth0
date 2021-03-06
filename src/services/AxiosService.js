import Axios from 'axios'

const baseURL = 'https://bcw-sandbox.herokuapp.com/'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const pokeApi = Axios.create({
  baseURL: '',
  timeout: 8000
})

export const bcwApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/daniel/pokemon',
  timeout: 8000
})

export const setBearer = function (bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function () {
  api.defaults.headers.authorization = ''
}
