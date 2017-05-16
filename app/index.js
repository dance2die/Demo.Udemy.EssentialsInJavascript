class Entity {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    greet() {
        console.log(`Hi I'm ${this.name} from middle earth`);
    }
}

let merry = new Entity("Merry", 4.6);
merry.greet();


// import {students} from "./students";
// console.log("students: ", students);

// import {add, mult} from "./calculator";
// console.log(add(1, 2));
// console.log(mult(1, 2));




