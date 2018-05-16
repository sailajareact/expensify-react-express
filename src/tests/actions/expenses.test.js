import {addExpense, removeExpense, editExpense} from '../../actions/expenses';
import { ENETRESET } from 'constants';
import moment from 'moment'

const expense = {
    description: 'test1',
    note: 'from jest test',
    amount: 34,
    createdAt: 1000
}

test("add expense with provided details", ()=>{
expect(addExpense(expense)).toEqual({
    type: 'ADD_EXPENSE',
    expense: {...expense, id: expect.any(String)}
})
}
)

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    });
  });

  test('should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    });
  });
  
  test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: {
        note: 'New note value'
      }
    });
  });
  
  
