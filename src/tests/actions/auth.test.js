import { login, logout } from '../../actions/auth';

test('should setup login object', () =>
{
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual(
    {
       type: 'LOGIN',
       uid 
    });
});

test('should setup logout object', () =>
{
    const action = logout();
    expect(action).toEqual(
    {
        type: 'LOGOUT'
    });
});