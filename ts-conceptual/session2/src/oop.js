"use strict";
{
    //Inheritance
    class MusicInstrument {
        constructor(name) {
            this.name = name;
        }
        play() {
            console.log(`playing the ${this.name}`);
        }
    }
    class Guiter extends MusicInstrument {
        constructor(name) {
            super(name);
        }
        sound() {
            console.log("this is the sound of guiter");
        }
    }
    const play1 = new Guiter("guiter");
    play1.sound();
}
