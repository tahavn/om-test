import {CartActionTypes, CartType, ICartState} from "../../types/cart";
import {IProductProps} from "../../types/productItem";

const initialState: ICartState = {
    cartItems: [],
    orderTotal: 0,
    priceTotal: 0
}

const updateCartItems = (cartItems:IProductProps[], item:IProductProps, idx:number):any[] => {

    if (item.quantity === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (product: IProductProps, item: IProductProps, num: number):IProductProps => {

    const {
        id = product.id,
        img = product.img,
        name = product.name,
        price = 0,
        quantity = num
    } = item;

    return {
        id,
        img,
        name,
        quantity: product.quantity + num,
        price: price + num * product.price
    };
};

const updateOrder = (state: ICartState, product: IProductProps, index:number, num: number):ICartState => {
    const productItem = state.cartItems.find(({id}) => id === product.id);
    const productList = state.cartItems;

    const newItem = updateCartItem(productItem, product, num);

    return {
        ...state,
        cartItems: updateCartItems(productList, newItem, index),
    }
}

const cartReducer = (state = initialState, action: CartType): ICartState => {
    switch (action.type) {
        case CartActionTypes.ADD_CART: {
            const productIndex = state.cartItems.findIndex(({id}) => id === action.payload.id);

            if(productIndex >= 0) {
                return updateOrder(state, action.payload, productIndex, 1);
            }

            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        }
        case CartActionTypes.REMOVER_FROM_CART:
            return state
        case CartActionTypes.ALL_REMOVED_FROM_CART:
            return state
        default:
            return state
    }
}


export default cartReducer;