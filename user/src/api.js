import axios from 'axios'

const url = 'https://back-elevators.herokuapp.com'
const moveUrl = `${url}/floor`

export const fetchElv =()=> axios.get(`${url}/elevators`)
export const moveZero =()=> axios.put(`${moveUrl}/:1`)

