{
    // class in OOP
    class Animale {
        // public name: string;
        // public species: string;
        // public sound: string;

        // parameter properties
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animale("mezba vai", "deg", "gheew ghew"); // agulo ak akta Instrains
    const cat = new Animale("Persian vai", "cat", "meow meow")
    dog.makeSound();
}
{
    class Animal {

        constructor( public name: string, public species: string, public sound: string ) {}

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("mezba vai", "deg", "gheew ghew"); 
    const cat = new Animal("Persian vai", "cat", "meow meow")
    cat.makeSound;
}