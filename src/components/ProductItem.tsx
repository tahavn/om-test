import React from "react";
import {IProductProps} from "../types/productItem";

interface IProductItemProps {
    product: IProductProps;
    handelClick: () => void;
}

const ProductItem: React.FC<IProductItemProps> = ({product, handelClick}) => {
    const {img, name, price} = product;
    return (
        <li className="catalog__item product">
            <div className="product__thumb">
                <img src={img} width="300" height="400" alt={name}/>
            </div>
            <div className="product__content">
                <h2 className="product__name">{name}</h2>
                <div className="product__price">{price} $</div>
            </div>
            <button type="button" onClick={handelClick} className="product__button button button_outline">Add to cart
            </button>
        </li>
    )
}

export default ProductItem;