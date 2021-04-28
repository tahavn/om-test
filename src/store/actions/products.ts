import {Dispatch} from "redux";
import {ProductsActionTypes, ProductsType} from "../../types/product";
import axios from "axios";

const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductsType>) => {
        try {
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
            const response = await axios.get('http://localhost:3000/db.json')
            setTimeout(() => {
                dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data.goods})
            }, 500)
        } catch (e) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'error while loading data'
            })
        }
    }
}

export default fetchProducts;