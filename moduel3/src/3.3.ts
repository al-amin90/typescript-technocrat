{
    // type Guard
    // typeof operator Guard
    type AlphaNumeric = string|number;
    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2
        }else{
            return param1.toString() + param2.toString()
        }
    }
    console.log(add(3, "5"));

      // in Guard
      type NormalUser = {
        name: string
      }
      type AdminUser = {
        name: string;
        role: string
      }
      const getUser = (user: NormalUser | AdminUser): void=> {
        if("role" in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name} `);
        }
      }
      const user1: NormalUser = {name: "al amin"}
      const user2: AdminUser = {name: "al amin", role: "admin"}
      getUser(user2)
}