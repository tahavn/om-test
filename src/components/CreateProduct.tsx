import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {IProductProps} from "../types/productItem";
import {createProduct} from "../store/actions/cart";
// import {updateProducts} from "../store/actions/products";
import defaultImg from "../assets/image/default.png"

interface IErrorMessageProps {
    message: string
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({message}) => {
    return (
        <div className="form__error">{message}</div>
    )
}

const CreateProduct: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const dispatch = useDispatch();

    const [errorText, setErrorText] = useState<string>('');
    const errorMessages: string[] = ['All fields must be filled.', 'The price must be greater than 0.'];
    // let currentMessage: string = '';

    const handlerChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setName(value.trim());
        setError(false);
    }
    const handlerChangePrice = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setPrice(value);
        setError(false);
    }

    const handlerSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        if(price.length && +price <= 0) {
            setErrorText(errorMessages[1]);
            setError(true);
            return
        }
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
            setErrorText(errorMessages[0]);
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
            {error && <ErrorMessage message={errorText} />}
            <button type="submit" className="form__button button">Submit</button>
        </form>
    )
}

export default CreateProduct;