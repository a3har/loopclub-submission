import axios from "axios";
import toastr from "toastr";
const BASE_URL = "http://localhost:8000/api/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

class request {
  createSubscription(email) {
    const data = { email: email };
    return instance.post("subscription-create/", data);
  }
}
export default new request();
