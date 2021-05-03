import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from 'redux-mock-store';
// import thunk from "redux-thunk";
import {Provider} from "react-redux";
// import MOCK_BD from "../mocks";

// const mockStore = configureMockStore([thunk]);

import CartItem from "./CartItem";

configure({adapter: new Adapter()});

describe('test catalog', () => {
    let props: any;
    let wrapper: any;
    beforeEach(() => {
        props = {
            product: {
                "id": "9fbec80e45172",
                "img": "http://pngimg.com/uploads/guitar/guitar_PNG3369.png",
                "name": "Fender",
                "price": 2000,
                "quantity": 1
            },
            handlerIncrement: jest.fn(),
            handlerRemover: jest.fn(),
            handlerAllRemover: jest.fn(),
        };
        // const store = mockStore(MOCK_BD);
        wrapper = shallow(
            // <Provider store={store}>
                <CartItem {...props}/>
            // </Provider>
        )
    });

    it('Caritem one', () => {
        // expect(wrapper.find('.container').toBe(1));
    })
})