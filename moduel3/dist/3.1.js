"use strict";
{
    // class in OOP
    class Animale {
        // public name: string;
        // public species: string;
        // public sound: string;
        // parameter properties
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animale("mezba vai", "deg", "gheew ghew"); // agulo ak akta Instrains
    const cat = new Animale("Persian vai", "cat", "meow meow");
    dog.makeSound();
}
