export class User{
    name:string;
    surname:string;
    email:string;
    password:string;

    constructor(name,surname,email,password){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.password=password;
    }
    
}

export class Project{
    id:number;
    name:string;
    description:string;
    teamMembers:User[];
    isPublic:boolean;

    constructor(){}
}
    
