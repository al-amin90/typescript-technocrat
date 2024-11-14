{
    // static in OOP
    // ar ak holo single memory source theke control kora, alada instace hoileo single source theke kaj kore.
    class Counter {
        static count: number = 0;
        static increment(){
            return Counter.count = Counter.count + 1
        }
        decrement(){
            return Counter.count = Counter.count - 1
        }
    }

    console.log(Counter.increment()); // 1 -> different memory

    const instance2 = new Counter()
    console.log(instance2.decrement()); // -1 -> different memory

}