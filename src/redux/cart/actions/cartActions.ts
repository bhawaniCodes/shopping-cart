
import { RootState } from "../../store"
import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from "../actionTypes"

export const addProduct = (id: number) => (dispatch: any, getState: () => RootState) => {
    const { products, cart } = getState();
    const item = products.items.filter((product:any) => product.id === id);

    if (!(cart?.cartItems?.[id])) {
        dispatch({
            type: ADD_PRODUCT,
            payload: { id, item: item[0] }
        })
    }
}

export const removeProduct = (id: number) => {
    return {
        type: REMOVE_PRODUCT,
        payload: { id }
    }
}
export const editProduct = (id: number, key: string, value: number) => {
    return {
        type: EDIT_PRODUCT,
        payload: { id, key, value }
    }
}