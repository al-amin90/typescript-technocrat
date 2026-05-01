"use strict";
{
    class CoffeMechine {
        constructor() {
            this.iaPowerOn = true;
        }
        powerOn() {
            this.iaPowerOn = true;
            console.log("coffe mechine is on eat ");
        }
        makeCoffee() {
            if (this.iaPowerOn) {
                console.log("eathing rhe coffe");
            }
            else {
                console.log("baire gelar coffe kete");
            }
        }
        powerOff() {
            this.iaPowerOn = false;
            console.log("coffe mechine is offf");
        }
    }
    const person1 = new CoffeMechine();
    person1.makeCoffee();
}
