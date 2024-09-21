import { Item, actionTypes } from "../products/productsTypes";
type cartItems = {
    [key: string]: object;
} & Record<string, any>

type cartState = {
    cartItems: cartItems,
}

export type {
    cartState,
    cartItems,
    Item,
    actionTypes
}