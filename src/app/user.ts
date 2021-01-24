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
    taskCount:number;
    todoTasks:Task[];
    doingTasks:Task[];
    doneTasks:Task[];

    constructor(){}
}

export class Task{
    id:number;
    title:string;
    assignment: any;
    state:string;
    projectid:number;
    priority:number;
    description:string;
    fromDate: any;
    toDate: any;

    constructor(){}
}
    
