import { AnyAction, Dispatch } from "redux";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, UPDATE_PRODUCT } from "../actionTypes";
import { apiService } from "../../api/apiService";
import { RootState } from "../../store";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

export const fetchProducts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
        dispatch(fetchProductsRequest());
        try {
           const response = await apiService.fetchProducts();
           dispatch(fetchProductsSuccess(response.data));
        } catch (error: any) {
            dispatch(fetchProductsFailure(error.message));
        }
    }
}

const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

const fetchProductsSuccess = (products: any[]): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch:any, getState: () => RootState) => {
    const cartItems = getState().cart.cartItems || {};
    const updatedProducts = products.map((product: any) => {
        if (cartItems?.[product.id]) {
            return {
                ...product,
                quantity: 1,
                atcText: 'ALREADY ADDED'
            }
        }
        return {
            ...product,
            quantity: 1,
            atcText: 'ADD TO CART'
        }
    });
    dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: updatedProducts
    })
}

const fetchProductsFailure = (errorText: String) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: errorText
    }
}

export const updatedProduct = (id: number, key: string, value: string) => {
    return {
        type: UPDATE_PRODUCT,
        payload: {id, key, value}
    }
}
