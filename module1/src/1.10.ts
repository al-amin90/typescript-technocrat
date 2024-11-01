{

    // Union types

    // type FrontendDeveloper = "fakibazDeveloper" | "JuniorDeveloper"
    // type FullstackDeveloper = "FrontendDeveloper" | "ExpertDeveloper"

    // type Developer = FrontendDeveloper | FullstackDeveloper;

    // const newDeveloper : FrontendDeveloper = "JuniorDeveloper"

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: "O+" | "A+" | "B+"
    }

    const user1: User = {
        name: "parvez",
        gender: 'male',
        bloodGroup: 'B+'
    }


    // Intersection & type 
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'FrontEnd Developer'
    }

    type BackendDeveloper = {
        skills: string[]
        designation2: 'BackEnd Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["html", "css", "js"],
        designation1: 'FrontEnd Developer',
        designation2: 'BackEnd Developer'
    }

    const data3: (number | string)[] = [3, 54, 'apple']

}