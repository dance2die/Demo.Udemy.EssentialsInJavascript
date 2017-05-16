import Entity from "./entity";

class Hobbit extends Entity {
    constructor(name, height) {
        super(name, height);
    }

    greet() {
        console.log(`Hello! I'm ${this.name} from the Shire!`);
    }
}

let frodo = new Hobbit("Frodo Baggins", 4.5);
frodo.greet();


// let merry = new Entity("Merry", 4.6);
// merry.greet();


// import {students} from "./students";
// console.log("students: ", students);

// import {add, mult} from "./calculator";
// console.log(add(1, 2));
// console.log(mult(1, 2));




