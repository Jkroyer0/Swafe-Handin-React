import { Token, tokenToString } from "typescript";
import { LoginDTO } from "../models/LoginDTO";
import { User } from "../models/User";

type myToken = {
  jwt: string
}

const apiUrl = "https://afe2021fitness.azurewebsites.net/api/";
export class UserService {

  private currentUser: User | undefined = undefined;

  public async login(loginData: LoginDTO) {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData)
    };

    let token: any;
    await fetch(apiUrl + "Users/login", request)
      .then(response => response.json())
      .then(data => token = data);

    localStorage.setItem("jwtToken", token.jwt);
    const request2 = {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken") }
    };

    const users: User[] = [];
    await fetch(apiUrl + "Users", request2)
      .then(response => response.json())
      .then(data => data.forEach((element: User) => {
        users.push(element);
      }));

    users.forEach(x => console.log("ID's", x.email));
    const us = users.find(x => x.email == loginData.email);

    if (us?.userId) localStorage.setItem("UserId", us?.userId.toString());
    return users.find(x => x.email == loginData.email);
  }


  public async getCurrentUser() {
    const request = {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken") }
    };

    await fetch(apiUrl + "Users/" + localStorage.getItem("UserId"), request)
      .then(response => response.json())
      .then(data => this.currentUser = data);
    return this.currentUser;
  }


  public async addTrainer(trainer: User) {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken") },
      body: JSON.stringify(trainer)
    };

    await fetch(apiUrl + "Users", request)
      .then(response => response.json())
      .then(data => console.log("Response: ", data));
  }

  public async getTrainerClients(){
    const request = {
        method: "GET",
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken")}
    };
    let clientList: User[] = [];

    await fetch(apiUrl+ "Users/Clients", request)
    .then(response => response.json())
    .then(data => data.forEach((element: User) => { 
        clientList.push(element);
    }));

    return clientList;
  }

}