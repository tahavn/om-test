import {ProductsActionTypes, productsState, ProductsType} from "../../types/product";

const initialState: productsState = {
    products: [],
    loading: false,
    error: null
}

const productsReducer = (state = initialState, action: ProductsType): productsState => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS:
            return {products: [], loading: true, error: null};
        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {products: action.payload, loading: false, error: null};
        case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
            return {products: [], loading: false, error: action.payload};
        case ProductsActionTypes.UPDATE_PRODUCTS:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export default productsReducer;