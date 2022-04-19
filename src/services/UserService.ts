import { AxiosResponse } from "axios";
import api from "../api";
import { ApiEndpoints } from "../api/endpoints";

class UserService {
  public login(username: string, password: string) {
    return api
      .post(ApiEndpoints.login, { username, password })
      .then(({ data: { userId, token } }: AxiosResponse<any>) => {
        localStorage.setItem("access_token", token);
        localStorage.setItem("userId", userId);

        return true;
      });
  }
}

export default new UserService();
