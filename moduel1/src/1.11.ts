{

    const age : number = 23;

    const result = 18 < age ? "Adult" : "Sisu"
    console.log(result);

//nullish coalescing operator
//null / undefine ===> decision making

const isAuthenticated = "";

const result1 = isAuthenticated ?? "Guest"
const result2 = isAuthenticated ? isAuthenticated : "guest"
console.log({result1}, { result2});

type User = {
    name: string;
    address: {
        city: string,
        road: string,
        presentAddress: string;
        permanentAddress?: string;
    }
}
const user: User = {
    name: "Al Amin Parvez",
    address: {
        city:  "kushtia",
        road: "Katai kana Mor",
        presentAddress: "Bheramara Kushtia",
    }
}

const permanentAddress = user?.address?.permanentAddress ?? "Noo Permanant add avilable";
console.log({permanentAddress});




}