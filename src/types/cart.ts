import {IProductProps} from "./productItem";

export enum CartActionTypes {
    ADD_CART = 'ADD_TO_CART',
    REMOVER_FROM_CART = 'REMOVED_FROM_CART',
    ALL_REMOVED_FROM_CART = 'ALL_REMOVED_FROM_CART'
}

export interface ICartState {
    cartItems: any[];
    orderTotal: number;
    priceTotal: number
}

interface IAddCartAction {
    type: CartActionTypes.ADD_CART;
    payload: IProductProps;
}

interface IRemoverFromCartAction {
    type: CartActionTypes.REMOVER_FROM_CART;
    payload: string;
}

interface IAllRemovedFromCart {
    type: CartActionTypes.ALL_REMOVED_FROM_CART
    payload: string;
}

export type CartType = IAddCartAction | IRemoverFromCartAction | IAllRemovedFromCart;