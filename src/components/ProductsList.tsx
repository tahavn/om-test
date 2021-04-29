import React from "react";
import ProductItem from "./ProductItem";
import {IProductProps} from "../types/productItem";

interface IProductListProps {
    products: IProductProps[];
    addToCart: (product:IProductProps) => void;
}

const ProductsList: React.FC<IProductListProps> = ({products, addToCart}) => {
    return (
        <ul className="catalog__list">
            {
                products.map(product => (
                    <ProductItem product={product} handelClick={() => addToCart(product)} key={product.id}/>
                ))
            }
        </ul>
    )
}

export default ProductsList;