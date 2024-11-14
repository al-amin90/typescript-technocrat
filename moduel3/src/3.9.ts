{
    //abstraction 1. interface    2.abstract
    //idea
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // akane interface ar oi structure ta car class follow korbe , atai Abstraction ja ki hote pare tar akti avas dei 

    class Car implements Vehicle{
        startEngine(): void{
            console.log("the car is starting the car engine");
        }
        stopEngine(): void {
            console.log("the car is stop the engine");
        }
        move(): void {
            console.log("the car is moving");
        }
        test(): void {
            console.log("i am testing");
        }
    }

    const toyotaCar = new Car()
    toyotaCar.stopEngine()

    // Abstract class
    // abstract class theke tumi follow korte parbe, kintu create korte parbe na atai instance make hoi na;
        //idea
    abstract class Car2 {
        // ki hote pare idea dite parbe, kisu impletation korte parbe na
        abstract startEngine(): void;  
        abstract stopEngine(): void;
        abstract move(): void;
        abstract test(): void;
    }

    //real Implementation
    class ToyotaCar extends Car2{
        startEngine(): void{
            console.log("the car is starting the car engine");
        }
        stopEngine(): void {
            console.log("the car is stop the engine");
        }
        move(): void {
            console.log("the car is moving");
        }
        test(): void {
            console.log("i am testing");
        }
    }


}