/**
 * ES6 classes
 */

 class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hi I'm ${this.name} and I'm ${this.age} years old.`;
    }
 }

 class Traveller extends Person {
     constructor(name = 'Anonymous', age = 0, homeLocation = 'Unknown') {
         super(name, age);
         this.homeLocation = homeLocation;
     }
     greeting() {
         let greet = super.greeting();

         if (this.homeLocation) {
             greet += ` I'm visiting from ${this.homeLocation}`;
         }

         return greet;
     }
 }

 const me = new Traveller('Vijay', 26, 'Mumbai');
 console.log(me.greeting());
 