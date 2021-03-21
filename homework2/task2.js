class Animal {
    constructor(name, sound, breed) {
        this.name = name;
        this.sound = sound;
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} is ${this.sound}!.`);
    }
    sayBreed() {
        console.log(`${this.name} is ${this.breed} breed.`);
    }
}
class Dog extends Animal {
    constructor(name, sound, breed, color) {
        super(name, sound, breed, color);
        this.color = color;
    }
    speak() {
        super.makeSound();
    }
    about() {
        super.sayBreed();
    }
    sayColor() {
        console.log(`${this.name} is ${this.color}.`);
    }
}
class Cat extends Animal {
    constructor(name, sound, breed, color) {
        super(name, sound, breed);
        this.color = color;
    }
    speak() {
        super.makeSound();
    }

    about() {
        super.sayBreed();
    }
    sayColor() {
        console.log(`${this.name} is ${this.color}.`);
    }
}
const charly = new Dog('Charly', 'barking', 'Akita', 'black');
const kitty = new Cat('Kitty', 'meowing', 'Russion Blue Cat', 'grey');
charly.speak();
kitty.sayColor();
kitty.about();
charly.about();