import {CartActionTypes, CartType} from "../../types/cart";
import {IProductProps} from "../../types/productItem";

const increment = (product: IProductProps) => ({
    type: CartActionTypes.INCREMENT_CART,
    payload: product
})

const remover = (product: IProductProps) => ({
    type: CartActionTypes.REMOVER_FROM_CART,
    payload: product
})

const allRemover = (product: IProductProps): CartType => ({
    type: CartActionTypes.ALL_REMOVED_FROM_CART,
    payload: product
})

const clearCart = (): CartType => ({
    type: CartActionTypes.CLEAR_CART
})

const createProduct = (product: IProductProps): CartType => ({
    type: CartActionTypes.CREATE_PRODUCT_CART,
    payload: product
})

export {
    increment,
    remover,
    allRemover,
    clearCart,
    createProduct
}