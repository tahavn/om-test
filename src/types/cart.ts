import {IProductProps} from "./productItem";

export enum CartActionTypes {
    ADD_CART = 'ADD_TO_CART',
    INCREMENT_CART = 'INCREMENT_CART',
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

interface IIncrementAction {
    type: CartActionTypes.INCREMENT_CART;
    payload: IProductProps;
}

interface IRemoverFromCartAction {
    type: CartActionTypes.REMOVER_FROM_CART;
    payload: IProductProps;
}

interface IAllRemovedFromCart {
    type: CartActionTypes.ALL_REMOVED_FROM_CART
    payload: IProductProps;
}

export type CartType = IAddCartAction | IIncrementAction | IRemoverFromCartAction | IAllRemovedFromCart;