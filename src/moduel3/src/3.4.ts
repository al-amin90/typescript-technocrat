{
    // instance of guard
    class Animale{
        name: string;
        species: string;

        constructor(name:string, species: string){
            this.name = name;
            this.species = species;
        }
        makeSound(){
            console.log(`I am make the sound`);
        }
    }

    class Dog extends Animale {
        constructor(name: string, species:string){
            super(name, species)
        }
        makeBark(){
            console.log(`i am braking `);
        }
    }
    class Cat extends Animale {
        constructor(name: string, species:string){
            super(name, species)
        }
        makeMeow(){
            console.log(`i am meowing `);
        }
    }

    //smart way te handle korar jonno chaile amra function bebohar korte pari
    const isDog = (animale: Animale) : animale is Dog => {
        return animale instanceof Dog
    }
    const isCat = (animale: Animale) : animale is Cat => {
        return animale instanceof Cat
    }

    const getAnimale = (animale: Animale) => {
        if(isDog(animale)){
            animale.makeBark()
        }else if(isCat(animale)){
            animale.makeMeow()
        }else{
            animale.makeSound()
        }
    }

    const dog = new Dog("dag vai", "dog") // a gulo ak akta instance
    const cat = new Cat("cat vai", "cat")
    // dog.makeBark()  
}



{//--------------------------------------------------------------------

    class Animal{
        constructor(public name: string, public species: string){}
        makeSound(){
            console.log("i am makeing sound");
        }
    }

    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeBark(){
            console.log("I am barking");
        }
    }
    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeMeow(){
            console.log("I am meawing");
        }
    }

    // smart way te 
    const isDog = ( animal : Animal) => {
        return animal instanceof Dog
    }
    const isCat = ( animal : Animal) => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal ) => {

        if(isDog(animal)){ // type gard ar maddome instance check
            animal.makeBark()
        }else if(isCat(animal)){
            animal.makeMeow()
        }else{
            animal.makeSound()
        }
    }
    
    const dog = new Dog("dag vai", "dog") 
    const cat = new Cat("cat vai", "cat")
    getAnimal(cat)
    // cat.
}