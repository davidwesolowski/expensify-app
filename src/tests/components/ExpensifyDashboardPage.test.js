import React from 'react';
import { shallow } from 'enzyme';
import ExpensifyDashboardPage from '../../components/ExpensifyDashboardPage';

test('Should render ExpensifyDashboardPage correctly', () =>
{
    const wrapper = shallow(<ExpensifyDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});