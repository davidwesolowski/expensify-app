import React from 'react';
import { shallow } from 'enzyme';
import NotFound404Page from '../../components/NotFound404Page';

test('Should render NotFound404Page correctly', () =>
{
    const wrapper = shallow(<NotFound404Page />);
    expect(wrapper).toMatchSnapshot();
});