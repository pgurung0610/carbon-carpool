import axios from 'axios'

const USERNAME = 'user'
const CARPOOL_API_URL = 'http://localhost:8080'
const USERS_API_URL = `${CARPOOL_API_URL}/users`

class UsersInfoService {

    retrieveAllCourses(name) {
        return axios.get(`${USERS_API_URL}`);
    }
}

export default new UsersInfoService()