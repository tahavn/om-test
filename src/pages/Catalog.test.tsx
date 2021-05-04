import React from "react";
import {render, configure} from "enzyme";
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

import Catalog from "./Catalog";

configure({adapter: new Adapter()});

describe('test catalog', () => {
    let wrapper: any;
    beforeEach(() => {
        const store = mockStore(MOCK_BD);
        wrapper = render(
            <Provider store={store}>
                <Catalog/>
            </Provider>
        )
    });

    it('should renders <Catalog/>', () => {
        // expect(wrapper).not.toBeNull();
        expect(wrapper).toMatchSnapshot()
    });
})