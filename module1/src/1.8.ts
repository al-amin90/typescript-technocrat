
{
    //Object destructuring
    const user = {
        id: 3252,
        name: {
            firstName: "AL Amin",
            middleName: "Parvez",
            lastName: "Jisan"
        },
        contactNo: "01716724371",
        address: "Ugenda"
    }

    const { 
        contactNo ,
        name: {middleName: midName}
    } = user;
    console.log(midName);

    // Array destructuring

    const myFriends = ['chandler', 'joey', 'ross',  'rachel', 'monica', 'phoebe']
    const [,, bestFriend, ...rest] = myFriends;

}