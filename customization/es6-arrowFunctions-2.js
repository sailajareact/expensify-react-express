//arguments object - no longer to the arrow functions
const add = function (a, b){
    console.log(arguments);
    return a+b
}
console.log(add(2, 8));
console.log(add(2, 8, 9));

const addArrow = (a, b) =>{
    // console.log(arguments)
    a+b};
console.log(addArrow(2, 8));

// this keyword - no longer bound
// const user = {name: 'steve', age:26, locations:['baltimore', 'washingtonDc'], 
//             printplacelived: function (){
//                 this.locations.forEach(function (location){
                          //  // const that = this; 
                  //  // console.log(that.user.name+' lived in '+location);
//                     console.log(user.name+' lived in '+location);
//                 })
//             }};

            const user = {name: 'steve', age:26, locations:['baltimore', 'washingtonDc'], 
                //         printplacelived: function (){
                //             // printplacelived: ()=>{    
                // this.locations.forEach((location)=>{
                //     console.log(this.name+' lived in '+location);
                //     // console.log(user.name+' lived in '+location);
                // })

                printplacelived(){
                    // printplacelived: ()=>{    
        // this.locations.forEach((location)=>{
            this.locations.map((location)=>{
            console.log(this.name+' lived in '+location);
            // console.log(user.name+' lived in '+location);
        })
            }
        };

            // console.log(user.printplacelived());
            user.printplacelived();

            // Practice: 
            // numbers: array of numbers
            // multiplyby: single number
            // print array of multiplied number [1,2]: [1,4]
            const numberDouble = {numbers: [1,2,3], multipyBy: 4,
                                    multiplier(){
                        return this.numbers.map((number)=>this.multipyBy*number)}
                                };

            console.log(numberDouble.multiplier());