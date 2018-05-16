// jsx javascript xml
//cannot understand by browser 
//so babel compiler can give u the browser understanding code by taking jsx
//browser understanding jsx of react code is
//var template = React.createElement("h1", { id: "someid" }, "this jsx running in app.js");

// // constant template
// var template = (<div>
// <h2>this jsx code change is running in app.js template in Indecision App</h2>
// <p>This is info</p>
// <ol>
//     <li>1st item</li>
//     <li>2nd item</li>
//     <li>3rd item</li>
// </ol>
// </div>);

// var appid = document.getElementById("app");
//  ReactDOM.render(template, appid);

// //// variable template
// var name = "sailaja";
// var age = 29;
// var location = "arkansas";

// var vartemplate = (<div>
//     <h1>{name}</h1>

//     </div>);

// practice1:
//  var templatetwo = (
//      <div>
//      <h1>Sailaja</h1>
//      <p>Age: 29</p>
//      <p>Location: Arkansas</p>
//      </div>);

// //practice2: template with object(javascript expressions)
// var tempObj = {name: 'sailaja', age: 29, location:'Arkansas'};
// var templatetwo = (
//     <div>
//     <h1>{tempObj.name}</h1>
//     <p>Age: {tempObj.age}</p>
//     <p>Location: {tempObj.location}</p>
//     <ol>
//     <li>item one</li>
//     <li>item two</li>
//     </ol>
//     </div>);

// var appid = document.getElementById("app");
//  ReactDOM.render(templatetwo, appid);

// //* /if statements
// //ternary operatiors
// / *//logical& operator

// //if statement, ternanry and logical statements
// var tempObj = {name: 'sailaja', age: 29, location:'Arkansas'};

// function getLocation(location){
//     if (location) {
//        return <p>Location: {location}</p>; //it won't print if no location value presents return 
//        // return location;
//     // } else {
//     //     return 'Unknown';
//     }
// }

// var templatetwo = (
//     <div>
//     <h1>{tempObj.name ? tempObj.name : 'Anonymous'}</h1>
//     {(tempObj.age && tempObj.age >= 27) && <p>Age: {tempObj.age}</p>}
//     {getLocation(tempObj.location)}
//     <ol>
//     <li>item one</li>
//     <li>item two</li>
//     </ol>
//     </div>);
//     // <p>Location: {getLocation(tempObj.location)}</p>

// var appid = document.getElementById("app");
//  ReactDOM.render(templatetwo, appid);


// //  Practice 3:
// // only render name subtitle(and p tag)if subtitle exits - logical operator
// // render new p tag - if options.length>0 "here are your options" "No options"

var appdet = {title: 'Indecision App', 
            subtitle: 'practicing react in this app',
          options: []};

          var appid = document.getElementById("app");

          const onFormSubmit = (e)=>{
                e.preventDefault();
            let option = e.target.elements.option.value;
            if(option){
                appdet.options.push(option);
                e.target.elements.option.value = '';
                console.log(appdet.options);
                    rendertemplate();   
            }
          };

          function visibilityButton(){
              <div>
              <p>Here are your options</p>
           
              <button>RemoveAll</button>
          </div>
            }

            function removeAll(){
                appdet.options=[];
                rendertemplate();
            }

// pucking option 
            function onMakeDecision(){
                // creating random number by setting range and rounding
                const randomNum = Math.floor(Math.random()*appdet.options.length);
                console.log(randomNum);
                alert(appdet.options[randomNum]); //creating popup
            }

          var rendertemplate = ()=>{ const  template = (
             <div>
             <h1>{appdet.title}</h1>
             {appdet.subtitle && <p>{appdet.subtitle}</p>} 
             <p>{appdet.options.length>0 ? "Here are your options" : "No options"}</p>
             <ol>
             {appdet.options.map((option)=>{
                return <li key={option}>{option}</li>
             })}
             </ol>
             <button disabled={appdet.options.length==0} onClick={onMakeDecision}>What Should I do</button>
             <button disabled={appdet.options.length==0} onClick={removeAll}>RemoveAll</button>
            <ol>
            <li>item one</li>
            <li>i   tem two</li>
            </ol>
            <form onSubmit = {onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            {[<p key='1'>a</p>, <p key='2'>b</p>, <p key='3'>c</p>] }
             </div>
          );
        //   ReactDOM.render(template, appid);
        }

        rendertemplate();


//Events and attributes, there's onclick action
let count = 0;
//  function addTwo(){ 
//     count = count+2
//     console.log("add two1 "+count);
//     // return count+=2
// };

const templateBrow = (
    // <button id="b1-id" className="b1Clsname">+1</button>
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            console.log('add one');
        }}>+1</button>
        <button onClick={()=>{
            // count = count+2
            // if(count==2){
            //     <h1>Count: {count}</h1>  
            // }else{
            //     <h1>Count: {count}</h1> 
            // }
    console.log("add two1 "+count);
        }}>+2</button>
    </div>
);

// ReactDOM.render(templateBrow, document.getElementById("app"));

// // Assignment: re rendering application(not scalable)
// // make button -1 - set up minusONE function and register minus one
// // make button reset - set up register function and register reset

// let count1=0;
//  let addOne = ()=>{ count1++ 
//     renderTemp();
//     console.log(count1)
//         };
//  let minusOne = ()=>{ 
//      count1--;
//      renderTemp();
//      console.log('minusOne '+count1)
//     };
//  let reset = ()=>{ 
//     count1=0;
//     renderTemp();
//     console.log('reset '+count1)
//     };
 
//  const appid = document.getElementById("app");

//  const renderTemp = ()=>{
//  const templateAss = (
//         <div>
//         <h1>Count:{count1}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>
//  );
//  ReactDOM.render(templateAss, appid)}

//  renderTemp();

//// challenge: toggle display
// create button show details: when click it show hide details button and some text
let click = true;
const showDetails = ()=>{
console.log('before clr: '+click);
click = !click;
console.log('afer clr: '+click);
toggleTempRender();
}

const appidtog = document.getElementById("app");

const toggleTempRender = ()=>{
    const toggleTemp = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={showDetails}>{(!click)?'Hide Details':'Show Details'}</button>
    {click == false && (<div>
        <p>here are the details</p>
        </div>)}
    </div>
)
// ReactDOM.render(toggleTemp, appidtog);
}

toggleTempRender();
