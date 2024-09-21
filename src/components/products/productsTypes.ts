
type Item = {
    id: number;
} & Record<string, any>;

type productsState = {
    items: Item[],
    loading: boolean,
    error: string | null
}

type actionTypes = {
    type: string,
    payload: any
}

type ProductItemProp = {
    item: Item,
    id: number
}

export type {
    Item,
    ProductItemProp,
    productsState,
    actionTypes
}