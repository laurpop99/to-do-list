import * as UI from './userInterface.js';
export function Project(name) {
    this.name = name;
    this.toDoList = [];
    this.printName = function() {
        console.log(this.name);
    }
    this.printObj = function() {
        console.log(this);
    }
}

export function TodoList(name, description, deadline) {
    this.name = name;
    this.description = description;
    this. deadline = deadline;
    this.printName = function() {
        console.log(this.name);
    }
    this.printObj = function() {
        console.log(this);
    }
}





