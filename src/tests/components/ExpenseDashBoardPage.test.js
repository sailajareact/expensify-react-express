import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard'

test("should render expense dash board correctly", ()=>{
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot()
} )
