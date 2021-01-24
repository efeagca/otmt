import { Project, User } from "./user";

export const Users:User[]=[
    {name:"Enes", surname:"Varcan", email:"enes@h.com",password:"1234"},
    {name:"Gökçin", surname:"Sezgin", email:"gogo@h.com",password:"1234"},
    {name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"},
    {name:"Mustafa Can", surname:"Bayar", email:"mustafa@h.com",password:"1234"},
]

export const Projects:Project[]=[
    {id:1, name:"Denemeler", description:"Deneme dedik ya", teamMembers:[{name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"}], isPublic:true},
    {id:2, name:"Denemeler 2", description:"Deneme dedik ya gökçin", teamMembers:[{name:"Efe", surname:"Ağca", email:"efe@h.com",password:"1234"}], isPublic:true}
]