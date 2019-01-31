import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import EditDeleteBtnsComponent from "./EditDeleteBtns";
import {mountWithStore} from "../../resetPassword/tests/email_reset.test";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


Enzyme.configure({adapter: new Adapter()});

describe('the edit delete button', function () {
  let store = mockStore({});
  let component = mountWithStore(<EditDeleteBtnsComponent />, store);
  it('should be clickable', function () {
    expect(component.find('#edit-icon')).toBeDefined();
    expect(component.find('#delete-icon')).toBeDefined();
  });
});
