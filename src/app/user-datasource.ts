import { Project, User } from "./user";

export const Users: User[] = [
    { name: "Enes", surname: "Varcan", email: "enes@h.com", password: "1234" },
    { name: "Gökçin", surname: "Sezgin", email: "gogo@h.com", password: "1234" },
    { name: "Efe", surname: "Ağca", email: "efe@h.com", password: "1234" },
    { name: "Mustafa Can", surname: "Bayar", email: "mustafa@h.com", password: "1234" },
    { name: "Example", surname: "Example", email: "example@example.com", password: "1234" }
]

export const Projects: Project[] = [
    {
        id: 1, name: "Example 1", description: "Description example.", teamMembers: [{ name: "Efe", surname: "Ağca", email: "efe@h.com", password: "1234" }], isPublic: true, taskCount: 0, 
        todoTasks: [
            {
                id: 1,
                title: "Task 1",
                priority: 1,
                assignment: [ { name: "Efe", surname: "Ağca", email: "efe@h.com", password: "1234" }],
                    description: "Description example.", 
                    state: "ToDo", 
                    projectid: 1, 
                    fromDate: "", 
                    toDate: ""
            },
            { 
                id: 2, 
                title: "Task 1", 
                priority: 2, 
                assignment: [ {  name: "Efe", surname: "Ağca", email: "efe@h.com", password: "1234" }],
                description: "Description example.",
                state: "ToDo", 
                projectid: 1, 
                fromDate: "", 
                toDate: "" 
             }
        ], doingTasks: [],
         doneTasks: []
    },
    {
        id: 2, name: "Example 2", description: "Description example.", teamMembers: [{ name: "Efe", surname: "Ağca", email: "efe@h.com", password: "1234" }], taskCount: 0, isPublic: true, todoTasks: [], doingTasks: [], doneTasks: [
            { id: 1, title: "Task 1", priority: 2, assignment: [ { name: "Efe", surname: "Ağca", email: "efe@h.com", password: "1234" }], description: "Description example.", state: "Done", projectid: 1, fromDate: "", toDate: "" }
        ]
    }
]