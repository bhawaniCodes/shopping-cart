import { actionTypes, cartState } from "../../../components/cart/cartTypes"
import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from "../actionTypes"




const initialState: cartState = {
    cartItems: {}
}

const cartReducer = (state = initialState, action: actionTypes) => {

    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                    // cartItems: [...state.cartItems, action.payload.item]
                    cartItems: {...state.cartItems, [action.payload.id]: action.payload.item}
            }
        case REMOVE_PRODUCT:
            const  { [action.payload.id]:_, ...remainingItems } = state.cartItems;
            return {
                ...state,
                    cartItems: remainingItems
            }
        case EDIT_PRODUCT:
            const { id, key, value } = action.payload;

            // const { [idd]: {...state.cartItems[idd], [key]: value } } = state.cartItems;
            return {
                ...state,
                    cartItems: { ...state.cartItems, [id]: {...state.cartItems[id], [key]: value} }
            }
        default: 
            return state;
    }

}

export default cartReducer;