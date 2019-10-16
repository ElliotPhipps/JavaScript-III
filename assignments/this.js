/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding-If there isn't anything left of the dot then the this keyword defaults to the window.
* 2. Implicit Binding- You are putting a piece of information or string to the left of the dot.
* 3. New Binding- You are creating a new object and it is stored in the this keyword.
* 4. Explicit Binding- You are putting an argument inside the parenthesis of the console.log() using .call, .bind, or .apply.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function listName(){
    console.log(`My name is ${this.name}`)
}

const user = {
    name:  'Elliot'
}

// Principle 2
// code example for Implicit Binding
let myBook = {
    name: 'The Sword of Truth',
    author: 'Terry Goodkind',
    genre: 'Fantasy',
    book: function() {
        console.log(this.name);
    }
}

myBook.book();

// Principle 3
// code example for New Binding
function Book(chapters) {
    this.phrase = chapters;
}

let myBook2 = new Book('Book Two');

console.log(myBook2.phrase);

// Principle 4
// code example for Explicit Binding
//.call
function friends(){
    console.log(this.name);
}

let myFriend = {
    name: 'James',
    age: '25',
}

let myFriend2 = {
    name: 'Jared',
    age: '26',
}

friends.call(myFriend);
friends.call(myFriend2);

//.bind
function friends(){
    console.log(this.name);
}

let myFriend1a = {
    name: 'James',
    age: '25',
}

let myFriend2a = {
    name: 'Jared',
    age: '26',
}

awesomeFriend1 = friends.bind(myFriend1a);
awesomeFriend2 = friends.bind(myFriend2a);

awesomeFriend1();
awesomeFriend2();

//.apply
var person = {
    fullName: function() {
    return this.firstName + " " + this.lastName;
    }
}

var person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

person.fullName.apply(person1);