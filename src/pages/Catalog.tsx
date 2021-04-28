import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import fetchProducts from "../store/actions/products";
import useTypedSelector from "../hooks/useTypedSelector";

const Catalog: React.FC = () => {
    const {products, loading, error} = useTypedSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);


    if(loading) {
        return (
            <div className="container">Loading</div>
        )
    }

    if(error) {
        return (
            <div className="container">
               <div className="error">{error}</div>
            </div>
        )
    }


    return (
        <div className="catalog">
            <div className="container">
                <ul className="catalog__list">
                    <li className="catalog__item product">
                        <div className="product__thumb">
                            <img src="" alt="alt"/>
                        </div>
                        <div className="product__content">
                            <h2 className="product__name">Name</h2>
                            <div className="product__price">10000 $</div>
                        </div>
                        <div className="product__quantity">Quantity: 12</div>
                        <button type="button" className="product__button button button_outline">Add to cart</button>
                    </li>
                    <li className="catalog__item product">
                        <div className="product__thumb">
                            <img src="" alt="alt"/>
                        </div>
                        <div className="product__content">
                            <h2 className="product__name">Name</h2>
                            <div className="product__price">10000 $</div>
                        </div>
                        <div className="product__quantity">Quantity: 12</div>
                        <button type="button" className="product__button button button_outline">Add to cart</button>
                    </li>
                    <li className="catalog__item product">
                        <div className="product__thumb">
                            <img src="" alt="alt"/>
                        </div>
                        <div className="product__content">
                            <h2 className="product__name">Name</h2>
                            <div className="product__price">10000 $</div>
                        </div>
                        <div className="product__quantity">Quantity: 12</div>
                        <button type="button" className="product__button button button_outline">Add to cart</button>
                    </li>
                    <li className="catalog__item product">
                        <div className="product__thumb">
                            <img src="" alt="alt"/>
                        </div>
                        <div className="product__content">
                            <h2 className="product__name">Name</h2>
                            <div className="product__price">10000 $</div>
                        </div>
                        <div className="product__quantity">Quantity: 12</div>
                        <button type="button" className="product__button button button_outline">Add to cart</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Catalog;