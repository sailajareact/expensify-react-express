import CreateStore, { createStore } from 'redux';

const store = createStore((state= {count:0}, action)=>{
    console.log('running') 
    switch(action.type){
    case 'INCREMENT':
    const incrementBy = 
    typeof action.incrementBy == 'number' ? action.incrementBy : 1;
     return ({count: state.count+incrementBy});
     case 'DECREMENT':
     return ({count: state.count-1});
     case 'RESET':
     return ({count: 0});
     case 'SET':
     return ({count: action.coun});
     default:
     return state;
    }
});

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

store.dispatch({
    type: 'INCREMENT',
});

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