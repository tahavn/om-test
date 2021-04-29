import {CartActionTypes, CartType, ICartState} from "../../types/cart";
import {IProductProps} from "../../types/productItem";

const initialState: ICartState = {
    cartItems: [],
    orderTotal: 0,
    priceTotal: 0
}

const updateCartItems = (cartItems: IProductProps[], item: IProductProps, index: number): IProductProps[] => {

    if (item.quantity === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ];
    }

    if (index === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1)
    ];
};

const updateCartItem = (product: IProductProps, item: IProductProps, num: number): IProductProps => {

    const {
        id = product.id,
        img = product.img,
        name = product.name,
        price = 0,
        quantity = 1
    } = item;

    return {
        id,
        img,
        name,
        quantity: quantity + num,
        price: price + num * product.price
    };
};

const updateOrder = (state: ICartState, product: IProductProps, index: number, num: number): ICartState => {
    const productItem = state.cartItems.find(({id}) => id === product.id);
    const productList = state.cartItems;

    const newItem = updateCartItem(productItem, product, num);

    const newItems = updateCartItems(productList, newItem, index);

    return {
        cartItems: newItems,
        orderTotal: orderTotal(newItems),
        priceTotal: priceTotal(newItems),
    }
}
const orderTotal = (allProduct: IProductProps[]): number => {
    return allProduct.reduce((sum: number, item: IProductProps) => sum + item.quantity, 0);
}

const priceTotal = (allProduct: IProductProps[]): number => {
    return allProduct.reduce((sum: number, item: IProductProps) => sum + item.price, 0);
}

const cartReducer = (state = initialState, action: CartType): ICartState => {
    switch (action.type) {
        case CartActionTypes.ADD_CART: {
            const productIndex = state.cartItems.findIndex(({id}) => id === action.payload.id);

            if (productIndex >= 0) {
                return updateOrder(state, action.payload, productIndex, 1);
            }
            const newCartItems = [
                ...state.cartItems,
                action.payload
            ]

            return {
                cartItems: newCartItems,
                orderTotal: orderTotal(newCartItems),
                priceTotal: priceTotal(newCartItems),
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