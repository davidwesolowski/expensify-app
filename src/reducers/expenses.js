const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) =>
{
    switch (action.type)
    {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
                //action.expenses przed firebase
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((element) => element.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) =>
            {
                if (expense.id === action.id)
                {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else
                {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;    
        default:
            return state;
    }
};

export default expensesReducer;