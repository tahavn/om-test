import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {IProductProps} from "../types/productItem";
import {createProduct} from "../store/actions/cart";
import {updateProducts} from "../store/actions/products";
import defaultImg from "../assets/image/default.png"

const CreateProduct: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handlerChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setName(value);
        setError(false);
    }
    const handlerChangePrice = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setPrice(value);
        setError(false);
    }

    const handlerSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        if (name.length && price.length) {
            const product: IProductProps = {
                id: name.trim() + Date.now(),
                img: defaultImg,
                name: name,
                price: +price,
                quantity: 1
            }
            // dispatch(updateProducts(product));
            dispatch(createProduct(product));
            setName('');
            setPrice('');
        } else {
            setError(true);
        }
    }

    return (
        <form className="form" onSubmit={handlerSubmit}>
            <div className="form__content">
                <div className="form__field">
                    <label className="form__label">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Product name"
                            className="form__input"
                            onChange={handlerChangeName}/>
                        <span className="form__label-text">Product name</span>
                    </label>
                </div>
                <div className="form__field">
                    <label className="form__label">
                        <input
                            type="number"
                            name="price"
                            value={price}
                            placeholder="Product price"
                            className="form__input"
                            onChange={handlerChangePrice}/>
                        <span className="form__label-text">Product price</span>
                    </label>
                </div>
            </div>
            {error && <div className="form__error">All fields must be filled.</div>}
            <button type="submit" className="form__button button">Submit</button>
        </form>
    )
}

export default CreateProduct;