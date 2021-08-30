import { all } from "redux-saga/effects";
import { buyerSaga } from "./buyerSaga";
import { productSaga } from "./productSaga";
import { sellerSaga } from "./sellerSaga";
import { userSaga } from "./userSaga";

export default function* rootSaga() {
	yield all([productSaga(), userSaga(), buyerSaga(), sellerSaga()]);
}
