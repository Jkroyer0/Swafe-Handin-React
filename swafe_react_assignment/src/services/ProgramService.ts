import { Program } from "../models/Program";




const apiUrl = "https://afe2021fitness.azurewebsites.net/api/";


export class ProgramService{

    public async getClientPrograms(clientId: number): Promise<Program[]> {

        const request = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken")}
        };
           
        let programList: Program[] = [];

        await fetch(apiUrl+ `WorkoutPrograms/client/${clientId}`, request)
        .then(response => response.json())
        .then(data => data.forEach((element: Program) => { 
            programList.push(element);
        }));

        return programList;
    }


    public async getAllTrainerPrograms(): Promise<Program[]>{

        const request = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken")}
        };
        let programList: Program[] = [];

        await fetch(apiUrl+ "WorkoutPrograms/trainer", request)
        .then(response => response.json())
        .then(data => data.forEach((element: Program) => { 
            programList.push(element);
        }));

        return programList;
    }

    public async postWorkOutProgram(program: Program){

        const request = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken")}
        };

        await fetch(apiUrl+ "WorkoutPrograms/trainer", request)
        .then(response => response.json())
        
    }



}