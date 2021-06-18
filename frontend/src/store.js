import { applyMiddleware, combineReducers } from "redux";
import { compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  productDetailsReducer,
  productListReducers,
} from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
