import axios from "axios";
import { productURL, productsURL } from "../api";

export const getProductPerUser = (product_id, user_id) => {
  return axios
    .get(productURL + "/product/" + product_id + "," + user_id)
    .then((response) => response.data);
};
export const getProduct = (product_id) => {
	return axios
		.get(productURL + "/" + product_id)
		.then((response) => response.data);
};
export const getProducts = () => {
	return axios.get(productsURL).then((response) => response.data);
};
