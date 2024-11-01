"use strict";
{
    //spread operator
    const bro1 = ['tamin', 'maruf', 'joga'];
    const bro2 = ['hisu', 'misu', 'kisu'];
    bro1.push(...bro2);
    const mentor1 = {
        typeScript: 'mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentor2 = {
        prisma: 'Firoz',
        next: 'Tanmony',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    // rest operator
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "kabul", "babul", "sabul", "labul");
}
