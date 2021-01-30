import { Project, User } from "./user";

export const Users:User[]=[
    {name:"Enes", surname:"Varcan", email:"enes@h.com",password:"1234"},
    {name:"Gökçin", surname:"Sezgin", email:"gogo@h.com",password:"1234"},
    {name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"},
    {name:"Mustafa Can", surname:"Bayar", email:"mustafa@h.com",password:"1234"},
    {name:"Example", surname:"Example", email:"example@example.com",password:"1234"}
]

export const Projects:Project[]=[
    {id:1, name:"Denemeler", description:"Deneme", teamMembers:[{name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"}], isPublic:true, taskCount:0,todoTasks:[
        {id:1, title:"Task 1", priority:1, assignment:[{user:{name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"},percentage:100}] ,description:"aloooo kim yapıyor bu taskı?", state:"ToDo", projectid:1, fromDate:"", toDate:""},
        {id:2, title:"Task 1", priority:2, assignment:[{user:{name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"},percentage:100}] ,description:"alo kim yapıyor bu taskı?", state:"ToDo", projectid:1, fromDate:"", toDate:""}
    ], doingTasks:[], doneTasks:[]},
    {id:2, name:"Denemeler 2", description:"Deneme projesi açıklaması", teamMembers:[{name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"}], taskCount:0, isPublic:true, todoTasks:[], doingTasks:[], doneTasks:[
        {id:1, title:"Task 1", priority:2, assignment:[{user:{name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"},percentage:100}] ,description:"alo kim yapıyor bu taskı?", state:"Done", projectid:1, fromDate:"", toDate:""}
    ]}
]