import { http } from '../plugins/axios'
import { user } from './apiUrls'

export default {
    login(params) {
        return http.post(user.verifylogin, params)
    },
    getPermissionlist() {
        return http.post(user.permissionlist)
    }
}