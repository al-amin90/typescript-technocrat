"use strict";
{
    // akane interface ar oi structure ta car class follow korbe , atai Abstraction ja ki hote pare tar akti avas dei 
    class Car {
        startEngine() {
            console.log("the car is starting the car engine");
        }
        stopEngine() {
            console.log("the car is stop the engine");
        }
        move() {
            console.log("the car is moving");
        }
        test() {
            console.log("i am testing");
        }
    }
    const toyotaCar = new Car();
    toyotaCar.stopEngine();
    // Abstract class
    // abstract class theke tumi follow korte parbe, kintu create korte parbe na atai instance make hoi na;
    //idea
    class Car2 {
    }
    //real Implementation
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log("the car is starting the car engine");
        }
        stopEngine() {
            console.log("the car is stop the engine");
        }
        move() {
            console.log("the car is moving");
        }
        test() {
            console.log("i am testing");
        }
    }
}
