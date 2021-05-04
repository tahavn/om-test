import React from "react";
import {render, configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import MOCK_BD from "../mocks";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useLayoutEffect: jest.requireActual('react').useEffect,
}));

const mockStore = configureMockStore([thunk]);

import Cart from "./Cart";

configure({adapter: new Adapter()});

describe('test catalog', () => {
    let wrapper: any;
    beforeEach(() => {
        const store = mockStore(MOCK_BD);
        wrapper = render(
            <Provider store={store}>
                <Cart/>
            </Provider>
        )
    });

    it('should renders <Cart/>', () => {
        expect(wrapper).not.toBeNull();
    });

    it('render products', () => {
        expect(wrapper.find('.cart__item')).toHaveLength(2);
    })

    it('add product to cart', ()=> {
        expect(wrapper.find('.cart__total-order').text()).toEqual('0');
    })
})