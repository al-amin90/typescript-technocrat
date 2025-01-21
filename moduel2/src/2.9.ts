{
// conditional type
type a1 = boolean;
type b1 = undefined;

type x = a1 extends number ? number : null ; // conditional type
type y = b1 extends boolean ? boolean : a1 extends number ? number : any

type Sheikh = {
    car: string;
    bike: string;
    ship: string;
    plane: string
}

type checkVehicle<T> = T extends keyof Sheikh ? true : false
type HasCar = checkVehicle<"plane"> 


}