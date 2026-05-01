{
    
const poorUser = {
    name: "mr. x"
}

const f1 : string[] = ["a","b","c"];
const f2 : string[]= ["d", "e", "f"]

f1.push(...f2)

type TTeacher = {
    name: string;
    skill: string;
}

const teacher1:TTeacher ={
    name: "a",
    skill: "html"
}
const teacher2 :TTeacher={
    name: "b",
    skill: '67'
}

const teachers = { 
    ...teacher1,
    ...teacher2
}
s
// Rest Operator 

const greetingFriends = (...friends: string[]): void =>  {
    // console.log(`Hi ${f1} ${f2} ${f3}`);
    friends.forEach((f: string): void => console.log(`Hi ${f}`))
}

greetingFriends("a", "b", "c", "d")
}