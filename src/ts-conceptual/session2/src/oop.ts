{
    //Inheritance
    class MusicInstrument{
        name: string;

        constructor(name:string){
            this.name = name
        }
        play(){
            console.log(`playing the ${this.name}`)
        }
    }

    class Guiter extends MusicInstrument{

        constructor(name:string) {
            super(name)
        }
        sound(){
            console.log("this is the sound of guiter");
        }
    }
    const play1 = new Guiter("guiter");
    play1.sound()

}

console.log('ok ok');