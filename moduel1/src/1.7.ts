const poorUser = {
    name: "mr. x"
}

const f1 : string[] = ["a","b","c"];
const f2: string[] = ["d", "e", "f"]

f1.push(...f2)

const teacher1 ={
    name: "a",
    skill: "html"
}
const teacher2 ={
    name: "b",
    skill: "css"
}

const teachers = { 
    ...teacher1,
    ...teacher2
}

// Rest Operator 

const greetingFriends = (...friends: string[]) => {
    // console.log(`Hi ${f1} ${f2} ${f3}`);
    friends.forEach((f) => console.log(`Hi ${f}`))
}

greetingFriends("a", "b", "c", "d")