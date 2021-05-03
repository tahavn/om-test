import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ProductItem from "./ProductItem";

configure({adapter: new Adapter()});

describe('<ProductItem/> in base product info', () => {
    let wrapper: any;
    let props: any;
    beforeEach(() => {
        props = {
            product: {
                "id": "9fbec80e45172",
                "img": "http://pngimg.com/uploads/guitar/guitar_PNG3369.png",
                "name": "Fender",
                "price": 2000,
                "quantity": 1
            },
            handelClick: jest.fn()
        };
        wrapper = shallow(
            <ProductItem {...props}/>
        )
    });

    it('should render button Add to Cart', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    })

    it('price must be indicated', () => {
        expect(props.product.price).toBe(2000);
    })
})