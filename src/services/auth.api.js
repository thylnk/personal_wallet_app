import api from "~shared/api";
import { USER_LOGIN } from "~shared/constants/endpoints";

const authApi = {
  login: (data) => () => {
    return api.post(USER_LOGIN, data)
  }
}

export default authApi;