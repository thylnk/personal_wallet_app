import api from "~shared/api";
import { USER_LOGIN } from "~shared/constants/endpoints";

const authApi = {
  login: (data) => {
    console.log(data)
    return api.post(USER_LOGIN, JSON.stringify(data))
  }
}

export default authApi;