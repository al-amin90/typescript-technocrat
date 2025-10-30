{
    //Union Types
    type FrontendDeveloper = 'fakibaz' | 'juniorDeveloper';
    type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    type Developer = FrontendDeveloper | FullStackDeveloper

    const newDeveloper: Developer = 'fakibaz'

    type User = {
        name: string,
        email?: string,
        gender: 'male' | 'female',
        bloodGrope: 'O+'|"A+"|"b+"
    }

    const User1: User = {
        name: "al amin",
        gender: "male",
        bloodGrope: "O+"
    }


    // Intersection type

    type FrontendDevelopers = {
        skills: string[],
        designation1: 'FrontEnd Developer'
    }
    type BackendDevelopers = {
        skills: string[],
        designation2: 'Backend Developer'
    }
    type FullStackDevelopers = FrontendDevelopers & BackendDevelopers;

    const fresher: FullStackDevelopers = {
        skills: ['html', 'css', 'node'],
        designation1 : 'FrontEnd Developer',
        designation2 : 'Backend Developer'
    }



}