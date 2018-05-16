import  { createStore } from 'redux';

// object destructuring
const data={a:3, b:4};
const destr = ({a, b}, c)=>{
console.log("tes"+(a+b+c));
return data;
}
destr({a:4,b:5}, 6);

// Action generators are the functions which returns 
// action objects
// const increment = (payload={})=>({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy == 'number' ? 
//                         payload.incrementBy : 1
// })

// const increment = ({incrementBy}={})=>({
//     type: 'INCREMENT',
//     incrementBy: typeof incrementBy == 'number' ? 
//                         incrementBy : 1
// })

// ----------------->Reducer<------------------------------
// Reducers: 1. r pure functions, i.e. the o/p of the function purely
// dependent on function i/p not from out of the variables
// 2. reducers r not changing state or action
const countReducer = (state= {count:0}, action)=>{
    console.log('running') 
    switch(action.type){
    case 'INCREMENT':
  return ({count: state.count+action.incrementBy});
     case 'DECREMENT':
     return ({count: state.count-1});
     case 'RESET':
     return ({count: 0});
     case 'SET':
     return ({count: action.coun});
     default:
     return state;
    }
}

// action generator
const increment = ({incrementBy = 1}={})=>({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const store = createStore(countReducer);

console.log(store.getState());

// to watch changing the data
store.subscribe(()=>{
    console.log(store.getState());
})

// // to unsubscribe
// const unsubscribe = store.subscribe(()=>{
//     console.log(store.getState());
// })

// Action: is an object that get sent to store 
// Increment value
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 3
});
// console.log(store.getState())
// unsubscribe();
store.dispatch(increment({incrementBy:3}));

store.dispatch(increment());

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    coun: 101
});

// console.log(store.getState())