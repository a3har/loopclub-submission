import axios from "axios";
const BASE_URL = "http://localhost:8000/api/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  responseType: "application/json",
});

class request {
  createSubscription(email, age) {
    const data = { email: email, age: age };
    return instance.post("subscription-create/", data);
  }
}
export default new request();
