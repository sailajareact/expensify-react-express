import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {createStore} from 'redux'

const state = {name: "tes"}
const store = createStore((state, action)=>{
    if (action.type === "SET_NAME") {
        console.log("addname")
        return ({...state, ...action.name})
    } else {
        return state
    }
})
  
const addName = (name)=>({
    type: "SET_NAME",
    name
})
store.dispatch(addName({name: "test"}))

console.log(store.getState())
const nowState= store.getState()

// const Jsx = ()=>(
//     <div>
//     <input type="text"/>
//     </div>
// )
const doChange = (e)=>{
    console.log(e.target)
    store.dispatch(addName({name: e.target.value}))
}

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is from info</p>
        <input type="text"
                value= {nowState.name}
                onChange = {(e)=>{
                    console.log(e.target.value)
                    store.dispatch(addName({name: e.target.value}))
                }}/>
                {console.log(state.name)}
        </div>
)

ReactDOM.render(<Info/>, document.getElementById('app'))

