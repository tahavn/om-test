import {IProductProps} from "./productItem";

export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

export interface productsState {
    products: IProductProps[];
    loading: boolean;
    error: null | string;
}

interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface FetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: IProductProps[];
}

interface FetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}

export type ProductsType = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction;