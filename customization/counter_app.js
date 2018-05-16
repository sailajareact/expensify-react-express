class CounterApp extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this);
        this.minusOne=this.minusOne.bind(this);
        this.reset=this.reset.bind(this);
        this.state={count:0}
    }

    componentDidMount(){
        const num = localStorage.getItem('count');
        const count = parseInt(num, 10)
        if(!isNaN(count)){
            this.setState(()=>({count}))
        }
    }

componentDidUpdate(prevProps, prevState){
    if(prevState.count!==this.state.count){
        const json = JSON.stringify(this.state.count)
        console.log('did update '+json)
        localStorage.setItem('count',json);
    }
}

 addOne(){
     this.setState((prevState)=>{
         let count=prevState.count+1;
         return ({count}) 
     })
    //  ()=>{ count1++ 
    // renderTemp();
    // console.log(count1)
    //     }
    }
 minusOne(){
    this.setState((prevState)=>{
        let count=prevState.count-1;
        return ({count}) 
    })
    //  ()=>{ 
    //  count1--;
    //  renderTemp();
    //  console.log('minusOne '+count1)
    // }
}
 reset(){
    this.setState((prevState)=>{
        return ({count:0}) 
    })
    //  ()=>{ 
    // count1=0;
    // renderTemp();
    // console.log('reset '+count1)
    // }
}
 

    render(){
        return (      
        <div>
        <h1>Count:{this.state.count}</h1>
         <button onClick={this.addOne}>+1</button>
         <button onClick={this.minusOne}>-1</button>
         <button onClick={this.reset}>reset</button>
         </div>
            
        )
    }
}

ReactDOM.render(<CounterApp/>, document.getElementById('app'));