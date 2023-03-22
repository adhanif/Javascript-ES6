// classes

/*class User{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    register(){
        console.log(this.name+ 'is now registered')
    }
}



//inheritance 

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package=memberPackage;
    }
    getpackage(){
        console.log(this.username+' is subscribed to the '+this.package)
    }
}

let mike= new Member('mouse', 'mouse@gmail.com', '987654321', 'standard')
mike.getpackage();
mike.register(); */


// getter or a setter methods

/*class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }

    getFullname(){
        const fullname=this.firstName+ ' '+this.lastName
        return fullname
    }

    get getScore(){
        return this.score
    }

    get getSkills(){
        return this.skills
    }

    set setScore(score){
        this.score+=score
    }

    set setSkils(skill){
        this.skills.push(skill)
    }

}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')*/


// Template Literals

/*let name='Dani';

let template=`<h1>Hello ${name}</h1>
<p>This is a simple template in Javascript</p>`;
document.getElementById('template').innerHTML= template;*/

// New String & Number Method
// startWith()
// endsWith()
// includes()

/*
let newstring='Hello world, ma name is dani and i love to learn Javascript';
console.log(newstring.startsWith('Hello'))
console.log(newstring.endsWith('Javascript'))
console.log(newstring.includes('love'))
console.log(Number.isNaN('string'))
console.log(Number.isInteger(2))
*/

// Default Params & Spread Operator

/*
function greet($greeting){
    console.log($greeting)
}

greet('dani')
*/

//Set, Map, WeakSet and WeakMap

let myArray=[11,22,33,44,55,66];
let mySet=new Set(myArray);
mySet.add('100');
mySet.delete(66)
// console.log(mySet)
mySet.forEach(function(val){
    console.log(val)
});

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//Map  dsdg

letmyMap=new Map();