import axios from "axios";
import { placeBidURL } from "../api";
export const placeBid = (payload) => {
  return axios.post(placeBidURL, payload).then((response) => response.data);
};

export const getUserBids = (id) => {
  console.log(id);
  return axios.get(placeBidURL + id).then((response) => response.data);
};

export const updateUserBids = (payload) => {
  console.log(payload);
  return axios.put(placeBidURL, payload).then((response) => response.data);
};
