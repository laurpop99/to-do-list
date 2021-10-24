export function Project(name) {
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    }
}

