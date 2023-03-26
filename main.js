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

//Set
/*
let myArray=[11,22,33,44,55,66];
let mySet=new Set(myArray);
mySet.add('100');
mySet.add(22)
mySet.delete('100')
mySet.forEach(function(val){
    console.log(val)
}) */

// const myMap= new Map();
// myMap.set('dani', '420');
// myMap.set('fani', '720');
// console.log(myMap.get('fani'))

//Exercise#1
// *Write a function that takes an array of numbers and 
//returns a new array containing only unique numbers.

/*
const al=[1,2,2,3,3,4,6,5,6,5,6]
function neue(ar){
    const set=new Set(ar)
    const newArray=[]
    for (const element of set){
        newArray.push(element)
    }
    return newArray;
}
console.log(neue(al))
//using Array.from method
function uniqueValues(a){
    const newset=new Set(a)
    const ArrayNew=Array.from(newset)
    return ArrayNew
}

console.log(uniqueValues(al))*/


//Exercise 2: Write a function that takes two arrays of numbers and 
//returns a new array containing only numbers that appear in both arrays.

/*
function uniTwoArrays(ar1, ar2){
    const set1=new Set(ar1)
    const set2=new Set(ar2)
    return Array.from(set1).filter(x=> set2.has(x))
arr1=[1,2,3,4,5,6,7,8,9]
arr2=[2,3,5,7,9,11,13]
console.log(uniTwoArrays(arr1, arr2))*/


//Exercise 3: Write a function that takes a string and 
//returns an array of unique characters in the string.

/*
function uniChar(str){
    const newStr=new Set(str)
     return Array.from(newStr)
}

const b='addbsdbhshshsh'
console.log(uniChar(b))*/

//Map Excercises

// Exercise 1
// Create a function called doubleArray that takes an array of numbers as 
// an argument and returns a new array with each element doubled.

/*
function doubleArray(arr){
    return arr.map(x=>x*2)
}
m=[1,2,3,4,5,6]
console.log(doubleArray(m))*/


// Exercise 3
// Create a function called convertToFahrenheit that takes an array of 
// temperatures in Celsius and returns a new array with each temperature 
// converted to Fahrenheit. 
// The formula to convert Celsius to Fahrenheit is 'F = C * 1.8 + 32'.

/*
function convertToFahrenheit(c){
  return c.map(
        function(x){
            const F=(x*1.8)+32
            return F
        }
    )
}
const b=[0, 20, 40]
console.log(convertToFahrenheit(b))*/

// Arrow function

/*
let add=function (a, b){
    let sum=a+b
    return sum
}
console.log(add(10,20))

let add=(a,b)=>a+b;
console.log(add(20,20))*/

// Exercise1 (Arrow function)
// Write an arrow function that takes in an array of numbers 
// and returns the largest number in the array.

/*
let arrow=(a)=>{
    let b=0;
    for(let i=0; i<a.length; i++){
        // console.log(a[i])
        if(b<a[i]){
            b=a[i] 
        }
    }
    return b
}
ara=[2,4,8,9,4,7,3,99]
console.log(arrow(ara))*/

