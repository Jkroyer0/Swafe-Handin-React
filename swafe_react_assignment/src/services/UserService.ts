import { Token, tokenToString } from "typescript";
import { LoginDTO } from "../models/LoginDTO";
import { User } from "../models/User";

type myToken = {
  jwt: string
}

const apiUrl = "https://afe2021fitness.azurewebsites.net/api/";
export class UserService {

  public async login(data: LoginDTO) {

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
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

    return users.find(x => x.email = data.email);
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


}