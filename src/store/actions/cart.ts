import {CartActionTypes, CartType} from "../../types/cart";
import {Dispatch} from "redux";
import {IProductProps} from "../../types/productItem";
import {RootState} from "../reducers";

function findProduct(productId: string, allState: () => RootState): IProductProps {
    const state = allState();
    const productItem = state.products.products;
    const product = productItem.find(({id}) => id === productId)!;
    return product
}

const increment = (productId: string) => {
    return (dispatch: Dispatch<CartType>, getState: () => RootState) => {
        const product = findProduct(productId, getState);

        dispatch({
            type: CartActionTypes.INCREMENT_CART,
            payload: product
        })
    }
}
const remover = (productId: string) => {
    return (dispatch: Dispatch<CartType>, getState: () => RootState) => {
        const product = findProduct(productId, getState);

        dispatch({
            type: CartActionTypes.REMOVER_FROM_CART,
            payload: product
        })
    }
}
const allRemover = (product: IProductProps) => ({
    type: CartActionTypes.ALL_REMOVED_FROM_CART,
    payload: product
})

const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

export {
    increment,
    remover,
    allRemover,
    clearCart
}