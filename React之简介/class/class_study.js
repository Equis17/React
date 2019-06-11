function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function () {
    console.log(this.name)
}
const p1 = new Person("dog", 1);
console.log(p1.say());


class Per {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say = () => {
        console.log(this.name)
    }
}

const p2 = new Per('cat', 2);
p2.say();
