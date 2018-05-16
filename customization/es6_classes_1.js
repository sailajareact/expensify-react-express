class Person{
constructor(name='anonymus', age=0){ //setting defaults
    // this.name=name||'anonymus'; //another way to set the defaults
    this.name = name;
    this.age = age;
    console.log(this.name);
    console.log(this.age);
}

getGreeting(){
    // return 'Hi. I am '+this.name;
    return `Hi. I am ${this.name} here`; //this's new feature in es6 expressions
}

getDescription(){
    return `Hi. I am ${this.name} of ${this.age} years old`;
}
}

let personObj = new Person('sai', 20);
console.log(personObj.getGreeting());
console.log(personObj.getDescription());
console.log(personObj);

let personObje = new Person();
console.log(personObje.getGreeting());
console.log(personObje.getDescription());
console.log(personObje);

class Student extends Person{
    constructor(name, age, major){
        super();
        this.major = major;
    }

    hasMajor(){
        return !!this.major; //"!!" is not an operator: it'll return boolean value i.e if it has the value or not, 
        // "!" is logical not operator, it'll invert the value
    }

    getDescription(){
         let description = super.getDescription();
         if(this.hasMajor()){
            description += `Their major is ${this.major}`;
         }
         return description;
    }

    getChild(){
        console.log('child meth');
    }
}

let studentObj = new Student('sai', 20, 'Electronincs&Communications');
console.log(studentObj.getGreeting());
console.log(studentObj.getDescription());
console.log(studentObj);

let studentObje = new Student('krist', 19);
console.log(studentObje.getGreeting());
console.log(studentObje.getDescription());
console.log(studentObje);

// let parent = new Person();
// parent.getChild();