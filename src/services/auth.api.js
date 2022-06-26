import api from "~shared/config/api";
import { USER, USER_LOGIN } from "~shared/constants/endpoints";

const authApi = {
  login: (data) => {
    return api.post(USER_LOGIN, JSON.stringify(data))
  },
}

export default authApi;