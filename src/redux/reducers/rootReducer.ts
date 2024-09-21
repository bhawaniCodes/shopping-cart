import { combineReducers } from "redux";
import productsReducer from "../products/reducers/productsReducer";
import cartReducer from "../cart/reducers/cartReducer";


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export default rootReducer;

