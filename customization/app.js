class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll=this.removeAll.bind(this);
        this.handlePickOption=this.handlePickOption.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.state={optionsArr:props.optionsArr, hasOptions:()=>{
            console.log((this.state.optionsArr.length>0));
           return this.state.optionsArr.length
        }
          }
        }

        componentDidMount(){
            try {
               const json=localStorage.getItem('options');
               const options=JSON.parse(json);
               console.log('fetching data from localstorage '+json);
               if(options){
                   this.setState(()=>({optionsArr:options}))
               } 
            } catch (e) {
                
            }
        }

        componentDidUpdate(prevProps, prevState){
            if(prevState.optionsArr.length !== this.state.optionsArr.length ){
                console.log('saving data to local storage previous array '+prevState.optionsArr
                                +' current state array '+this.state.optionsArr)
                const json = JSON.stringify(this.state.optionsArr);
                console.log('after stringfy '+json);
                localStorage.setItem('options', json);
                console.log('test')
            }
        }

        componentWillMount(){
            console.log('component will mount')
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

       handleDeleteOption(optionToRemove){
            console.log('option'+optionToRemove)
            this.setState((prevState)=>{
                // let options=prevState.optionsArr.remove(option);
                return {optionsArr:prevState.optionsArr.filter((option)=>{
                    console.log('option to remove '+optionToRemove)
                    console.log('option to comparing '+option)
                    console.log('filter'+optionToRemove !=option)
                    return optionToRemove !=option;
                })};
            })
       }

    render(){
        const headTitle = "IndecisionApp";
        const headSubTitl= "This's from Header";

        return (
            <div>
            <Header title={headTitle} subtitle={headSubTitl}/>
            <Action checkOpt={this.state.hasOptions()} pickOption={this.handlePickOption}/>
            <Options options={this.state.optionsArr} remove={this.removeAll} 
                     handleDeleteOption={this.handleDeleteOption}/>
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
            {props.options.map((option)=><Option key={option} text={option} 
                                                 handleDeleteOption={props.handleDeleteOption}/>)}
            </div>
        );
}

const Option=(props)=>{
    return (
        <div>
        {props.text}
        <button onClick={(e)=>props.handleDeleteOption(props.text)}>Remove</button>
        </div>
    );
}

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<IndecisionApp optionsArr={['defval']}/>, document.getElementById('app'));