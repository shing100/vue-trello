import axios from "axios"
import router from "../router"

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthrorized = () => {
    router.push('/login')
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
    .then(result => result.data)
    .catch(error => {
        const { status } = result.response
        if( status === UNAUTHORIZED ) return onUnauthrorized()
        throw Error(error)
    })
}

export const board = {
    fetch() {
        return request('get', '/boards')
    }
} 