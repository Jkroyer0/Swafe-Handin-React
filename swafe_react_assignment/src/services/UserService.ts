import { Token } from "typescript";
import { LoginDTO } from "../models/LoginDTO";
import jwtDecode from "jwt-decode";



const apiUrl = "https://afe2021fitness.azurewebsites.net/api/";
export class UserService{


public async login(data: LoginDTO){

    console.log(data.toString())
const request = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
    //body: JSON.stringify({"email": data.email, "password": data.password})
    
   
};

    let token = "";

    await fetch(apiUrl+"Users/login", request)
    .then(response => response.json())
    .then(data => token = jwtDecode(data));

    
   // let decoded = jwtDecode(token);
    console.log("my decoded token " , token);
   console.log("my token ", token);
   console.log("my token as string " + token.toString())
    //const osdf = JSON.parse(token);
    //console.log("my jwt token " , osdf.jwt)

    const request2 = {
        method: "GET",
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiU3VwZXJtYW4iLCJSb2xlIjoiUGVyc29uYWxUcmFpbmVyIiwiVXNlcklkIjoiMiIsIm5iZiI6IjE2MzgyMDI4NjgiLCJleHAiOiIxNjM4Mjg5MjY4In0.g53c_1yTaHx2v7iC1tHs5ZLZHVfX6yN9SQcBpPgzG1U"}
        
        
    };


    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiTWFuYWdlciIsIlJvbGUiOiJNYW5hZ2VyIiwiVXNlcklkIjoiMSIsIm5iZiI6IjE2MzgyMDI1OTgiLCJleHAiOiIxNjM4Mjg4OTk4In0.vjay88graYQPDUm-y6NmUbzzSbrPm9jlpFKaaT8RafI
    await fetch(apiUrl+"Users", request2)
    .then(response => response.json())
    .then(data => console.log("this is server data" , data));
}
}





function replacer(key:string, value: string)
{
    if(typeof value === "string"){
        return undefined
    }
    return value;
}