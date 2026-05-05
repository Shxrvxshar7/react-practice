//console.log('Hello world');
//console.error('This is an error')
//console.warn('This is a warning')

//var(outdated, unsafe), 

// let(changeable variable), 
//let a = 10;
//a =20;
//console.log(a)

// const(fixed reference(onoly use if wont re-assign))
//const b = 10;
//b = 20
//console.log(b)



//String, NUmbers, Boolean, null, undefined, Symbol

/*const name = 'John';
const age =30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z; //also undefined

console.log(typeof x) -> returns object
*/

/*
//Strings
const name = 'John';
const age =30;

//concatenation
console.log('My name is name and i am age');
console.log(`My name is ${name} and i am ${age}`);

const s = 'hello world'
console.log(s.length);
console.log(s.toUpperCase())



// arrays 

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples','oranges', 10, true]
console.log(fruits);

fruits[1] = 'grapes';
fruits.push('mangos')
// 
console.log(fruits[1]);

*/
/*
const person = {
    firstName : 'John',
    lastName : 'Doe',
    age:30,
    hobbies : ['music','football','cooking'],
    address: {
        door: 2,
        street: '1st street',
        city: 'Chennai'
    }
}

console.log(person.firstName, person.lastName,person.hobbies[1])

const {firstName, lastName} = person;

*/

/*
const todos = [
    {
        id : 1,
        text: 'Take trash out',
        isCompleted : true
    },
    {
        id : 2,
        text: 'Meeting with nig',
        isCompleted : false
    },
    {
        id : 3,
        text: 'Go jim',
        isCompleted : true
    }
];

console.log(todos[1].text);


//coverting to json string, this how we send data to the server or db
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


*/

/*
// loops

for(let i = 0; i <10; i++){
    console.log(i)
}

let i = 0

while (i<10){
    console.log(`Number: ${i}`)
    i++;
}

//for each, map, filter

//normal
for(let todo of todos){
    console.log(todo.text)
}

//foreach
todos.forEach(function(todo){
    console.log(todo.text);
})

//map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText)

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted)

//add more methods 

const todoCompleted2 = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted2)

*/

/*
// CONDITIONS

const x = 10;
// == doesnt care if data type is different while === cares and reults false
if(x === 10){
    console.log('x is 10')
}

const color = x === 10 ? 'red' : 'blue';
console.log(color)


switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is red');
        break;
    default:
        console.log('color is neither')
        break;
}

*/

/*
//FUNCTIONS

function addNums(num1 = 1, num2 = 1){ //default values will be taken if parameters are empty
    return num1 + num2;
}

console.log(addNums(4,0));

//arrow functions: name it as a vaiable, use = sign, and use fat arrow

const subNums = (num1 , num2) => {
    return num1 - num2
}
console.log(subNums(4,2));

// no need for {} and return statement see below line
const mulNums = (num1,num2) => num1 * num2;
console.log(mulNums(4,2));

*/


//OOPS

/*
function Person(firstName, lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    

}

//Instantiate object
const person1 = new Person('John', 'Doe',"04-03-2004");
const person2 = new Person('Sharvesh', 'A R',"27-09-2004");

//console.log(person1.firstName + person1.lastName);
//console.log(person1.dob)
//console.log(person1.dob.getFullYear())
//or
//console.log(person1.getBirthYear())
//console.log(person1.getFullName())

// prototype: used to stop creating multiple copies of the same method and saves memory

Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    } ;
console.log(person1)

*/

// CLASS

/*
class Person{
    constructor(firstName, lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
}

const person1 = new Person('John', 'Doe',"04-03-2004");

console.log(person1.getBirthYear());

*/


// single element
//document is used to slect things from the document

//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//Multiple elemtns

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('li'));


//const items  = document.querySelectorAll('.item');

//items.forEach((item) => console.log(items));

const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Heloa';
ul.children[1].innerText = 'SHarvesh'
ul.lastElementChild.innerHTML = '<h3>Hello</h3>';
const label = document.querySelector('label[for="email"]');
label.style.color = "red";

const email = document.getElementById("email");
email.style.color = "white";
email.style.backgroundColor = "black";
email.style.border = "2px solid blue";

//const btn = document.querySelector('.btn');
//btn.style.backgroundColor = 'red';


// events
const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault(); //  stop refresh
//     console.log('click');
//     console.log(e.target.className)
// })

const form = document.getElementById('my-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    btn.value = "Submitted"; // change button text
    btn.style.backgroundColor = "lightgreen"; // change color
});


// USER FORM SCRIPT

//Put DOM elemnts into variables
const myForm = document.querySelector('#my-form'); // # means id-selector 
const nameInput = document.querySelector('#name'); 
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');  // . means class selector


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput); // this gives the actual element like this:  <input type="text" id="name">
    // so if we want value
    //console.log(nameInput.value);

    //form validation, if name and email are empty dont submit

    if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields'); but this is ugly
    msg.classList.add('error');  //taken ffrom styles 
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);  // error mesage disappears after 3 seconds
} else { // when both email and name are entered we want to store it in the list item into ul id="users"
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    userList.appendChild(li);

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
}
}