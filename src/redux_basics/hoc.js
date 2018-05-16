import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is from info</p>
        {props.info}
    </div>
)

const User = (props)=>(
    <div>
    <h1>User</h1>
    {props.text}
    </div>
)

const AdminWarning = (WrappedComponent, User)=>{
    return ((props)=>(<div>
        <h1>AdminWarning</h1>
        <p>this is from admin</p>
        {props.isAdmin ? 
        <WrappedComponent {...props}/> 
        : <p>please login</p>}
        <User {...props}/>
    </div>))
}

const HocAdmin = AdminWarning(Info, User);

// ReactDOM.render(<Info />, document.getElementById('app'))
ReactDOM.render(<HocAdmin isAdmin={true} 
    info='here r details' text='user details'/>, 
    document.getElementById('app'))
