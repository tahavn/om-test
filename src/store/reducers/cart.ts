import {CartActionTypes, CartType, ICartState} from "../../types/cart";
import {IProductCartProps, IProductProps} from "../../types/productItem";

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

const updateCartItem = (product: IProductCartProps, item: IProductCartProps, num: number): IProductCartProps => {
    return {
        id: item.id,
        img: item.img,
        name: item.name,
        quantity: product.quantity + num,
        price: product.price + num * product.priceOne,
        priceOne: product.priceOne
    };
};

const updateOrder = (state: ICartState, product: IProductCartProps, num: number): ICartState => {
    const productList = state.cartItems;
    const productIndex = productList.findIndex(({id}) => id === product.id)
    const productItem = productList.find(({id}) => id === product.id);

    const newItem = updateCartItem(productItem, product, num);

    const newItems = updateCartItems(productList, newItem, productIndex);

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

const createProduct = (state: ICartState, product: IProductProps): ICartState => {
    return {
        ...state,
        cartItems: [
            product,
            ...state.cartItems,
        ]
    }
}

const clearCart = (): ICartState => {
    return {
        cartItems: [],
        orderTotal: 0,
        priceTotal: 0,
    }
}

const productCart = (product: IProductProps): IProductCartProps => ({
    ...product,
    priceOne: product.price
})

const cartReducer = (state = initialState, action: CartType): ICartState => {
    switch (action.type) {
        case CartActionTypes.ADD_CART: {
            const productIndex = state.cartItems.findIndex(({id}) => id === action.payload.id);
            if (productIndex >= 0) {
                return updateOrder(state, productCart(action.payload), 1);
            }
            const newCartItems = [
                ...state.cartItems,
                productCart(action.payload)
            ]

            return {
                cartItems: newCartItems,
                orderTotal: orderTotal(newCartItems),
                priceTotal: priceTotal(newCartItems),
            }
        }
        case CartActionTypes.INCREMENT_CART:
            return updateOrder(state, productCart(action.payload), 1);
        case CartActionTypes.REMOVER_FROM_CART:
            return updateOrder(state, productCart(action.payload), -1);
        case CartActionTypes.ALL_REMOVED_FROM_CART:
            const numRemoved = action.payload.quantity;
            return updateOrder(state, productCart(action.payload), -numRemoved);
        case CartActionTypes.CLEAR_CART:
            return clearCart();
        case CartActionTypes.CREATE_PRODUCT_CART: {
            return createProduct(state, productCart(action.payload));
        }
        default:
            return state
    }
}


export default cartReducer;