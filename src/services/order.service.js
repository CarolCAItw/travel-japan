import axios from "axios";
const API_URL = "http://localhost:8080/api/orders";

class OrderService {
  post(member, title, amount, priceDB) {
    return axios.post(API_URL + "/order", { member, title, amount, priceDB });
  }
}

export default new OrderService();
