const obj={nmae:'ink', getName(){
    return this.nmae
} };
console.log('binding: '+obj.getName());
const getName = obj.getName.bind(obj); // by calling bind with the object will recconect the binding of the menthod
console.log('test '+getName());


const headTitle = "IndecisionApp";
const headSubTitl= "This's from Header";
// const optionsArr = ['one', 'two', 'three'];

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll=this.removeAll.bind(this);
        this.handlePickOption=this.handlePickOption.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={optionsArr:props.optionsArr, hasOptions:()=>{
            console.log((this.state.optionsArr.length>0));
           return this.state.optionsArr.length
        }
          }
        }

        removeAll(){
            this.setState(() => {
                return {optionsArr: []}
              });
        } 
        
       handlePickOption(){
           let randomNum = Math.floor(Math.random()*this.state.optionsArr.length)
           alert(this.state.optionsArr[randomNum]);
       } 

       handleAddOption(option){
           if (!(option)) {
               return 'Enter valid value to add item';
           } else if(this.state.optionsArr.indexOf(option)>-1){
               return 'Value already exist in the list';
           }
            this.setState((prevState)=>{
                return {optionsArr:prevState.optionsArr.concat(option)};
            })
       }

    render(){
        return (
            <div>
            <Header title={headTitle} subtitle={headSubTitl}/>
            <Action checkOpt={this.state.hasOptions()} pickOption={this.handlePickOption}/>
            <Options options={this.state.optionsArr} remove={this.removeAll}/>
            <AddOption addOption={this.handleAddOption}/>
            </div>);
    }

}

// setting defaults to the app
IndecisionApp.defaultProps={
    optionsArr: ['defaultval']
}

  //stateless components which will only use for representation not to update
  const Header=(props)=>{
    return (
        <div>   
        <h1>{props.title}</h1> 
        <p>{props.subtitle}</p>
        </div>);
}

  const Action= (props) => {
    return (
        <div> 
        <button onClick={props.pickOption} 
        disabled={(props.checkOpt)==0}>What should I do?</button> 
        </div>);
};

const Options=(props)=>{
        // <button onClick={this.removeAll.bind(this)}>Remove All</button> //one way of method binding
        return (
            <div>
            <button onClick={props.remove}>Remove All</button> 
            {props.options.map((option)=><Option key={option} text={option}/>)}
            </div>
        );
}

const Option=(props)=>{
    return (
        <div>
        {props.text}
        </div>
    );
}

// class Header extends React.Component{
//     render(){
//        return (
//         <div> 
    
//         <h1>{this.props.title}</h1> 
//         <p>{this.props.subtitle}</p>
//         </div>);
//     }
// }

// class Action extends React.Component{
//     // pickOption(){
//     //     alert('pick');
//     // }

//     render(){
//        return (
//         <div> 
//         <button onClick={this.props.pickOption} 
//         disabled={(this.props.checkOpt)==0}>What should I do?</button> 
//         </div>);
//     }
// }

// class Options extends React.Component{
//     constructor(props){
//         super(props);
//         // this.removeAll = this.removeAll.bind(this);
//     }

//     // removeAll(){
//     //     // console.log('options '+this.props.options); //missing connction from the parent method, need to bind it
//     //     this.props.state
//     //     // alert('remove option');

//     // } 

//     render(){
//         // <button onClick={this.removeAll.bind(this)}>Remove All</button> //one way of method binding
//         return (
//             <div>
//             <button onClick={this.props.remove}>Remove All</button> 
//             {this.props.options.map((option)=><Option key={option} text={option}/>)}
//             </div>
//         );
        
//     //    return (
//     //     <div> 
//     //     <p>This's from Options component</p>
        
//     //     <Option data={this.props.options} />
//     //     {
//     //     //     this.props.options.map((option)=>{
//     //     //         // return <Option key={option} text={option}/>
//     //     //         return <li key={option}>{option}</li>
//     //     // })
//     //         }
//     //     </div>);
//     }
// }

// class Option extends React.Component{
//     render(){
//         console.log(`option: ${this.props.data}`);
//         return (
//             <div>
//             {this.props.text}
//             </div>
//         );

//         // return (
//         //     <div>
//         //     {
//         //         this.props.data.map((dat)=><li key={dat}>{dat}</li>)
//         //     }
//         //     </div>  )

//     //    return (
//     //     <div>
//     //     {this.props.text}
//     //     <p>This's from Option component</p>
//     //     </div>);
//     // return temp;
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={error:undefined};
    }
    handleAddOption(e){
        e.preventDefault();
        console.log('tst');
        let option = e.target.elements.value1.value.trim();
        console.log(option);
        e.target.elements.value1.value='';
        const error = this.props.addOption(option);
        // if(option){
            this.setState(()=>{
            
                    return {error};
            })

        // }
    }
    render(){
       return (
        <div> 
        {console.log(this.state.error)}
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        <input type='text' name='value1'/>
        <button>Add Option</button>
        </form>
        </div>);
    }
}

// const template = (
//     <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption/>
//     </div>);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<IndecisionApp optionsArr={['defval']}/>, document.getElementById('app'));