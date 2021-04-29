import React, {useEffect} from "react";
import ProductsList from "../components/ProductsList";
import useTypedSelector from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import fetchProducts from "../store/actions/products";
import {CartActionTypes} from "../types/cart";
import {IProductProps} from "../types/productItem";

const Catalog: React.FC = () => {
    const {products, loading, error} = useTypedSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const handleAddToCart = (product:IProductProps): void => {
        dispatch({
            type: CartActionTypes.ADD_CART,
            payload: product
        })
    }


    if (loading) {
        return (
            <div className="container">
                <div className="loading">Loading...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container">
                <div className="error">{error}</div>
            </div>
        )
    }

    return (
        <div className="catalog">
            <div className="container">
                <ProductsList products={products} addToCart={handleAddToCart}/>
            </div>
        </div>
    )
}

export default Catalog;