import authReducer from '../../reducers/auth';

test('should setup default state', () =>
{
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should add uid when login', () =>
{
    const uid = 'abc123';
    const auth = {};
    const action = 
    {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(auth, action);
    expect(state).toEqual({ uid });
});

test('should not set (remove) uid when logout', () =>
{
    const uid = 'abc123';
    const auth = { uid };
    const action = { type: 'LOGOUT' };
    const state = authReducer(auth, action);
    expect(state).toEqual({});
});