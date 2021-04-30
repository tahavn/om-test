export interface IProductProps {
    id: string;
    img: string;
    name: string,
    price: number;
    quantity: number;
}

export interface IProductCartProps {
    id: string;
    img: string;
    name: string,
    price: number;
    priceOne: number;
    quantity: number;
}