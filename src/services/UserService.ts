import { AxiosResponse } from "axios";
import api from "../api";
import { ApiEndpoints } from "../api/endpoints";

class UserService {
  public login(username: string, password: string) {
    return api
      .post(ApiEndpoints.login, { username, password })
      .then(({ data }: AxiosResponse<any>) => {
        localStorage.setItem("access_token", data);

        return true;
      });
  }
}

export default new UserService();
