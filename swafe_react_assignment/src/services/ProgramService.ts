import { Exercise } from "../models/Exercise";
import { Program } from "../models/Program";




const apiUrl = "https://afe2021fitness.azurewebsites.net/api/";


export class ProgramService {

    public async getClientPrograms(clientId: number) {

        const request = {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken") }
        };

        let programList: Program[] = [];

        await fetch(apiUrl + `WorkoutPrograms/client/${clientId}`, request)
            .then(response => response.json())
            .then(data => data.forEach((element: Program) => {
                programList.push(element);
            }));

        return programList;
    }


    public async getAllTrainerPrograms(){

        const request = {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken") }
        };
        let programList: Program[] = [];

        await fetch(apiUrl + "WorkoutPrograms/trainer", request)
            .then(response => response.json())
            .then(data => data.forEach((element: Program) => {
                programList.push(element);
            }));

        return programList;
    }

    public async postWorkOutProgram(program: Program) {

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken"), "Acces-Control-Allow-Origin": "*"},
            body: JSON.stringify(program)
        };

        await fetch(apiUrl + "WorkoutPrograms", request)
        .then(response => response.json())
            

    }

    public async getExercises() {

        const request = {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken") }
        };

        let exerciseList: Exercise[] = [];

        await fetch(apiUrl + "Exercises", request)
        .then(response => response.json())
        .then(data => data.forEach((element: Exercise) => {
            exerciseList.push(element);
        }))
    
      
        return exerciseList;
    }

    public async postExercise(data: Exercise){

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken") },
            body: JSON.stringify(data)
        };

        

        await fetch(apiUrl + "Exercises", request)
            .then(response => response.json())
            
            
            

    }

    public async addExercise(programId: Number, exercises: Exercise[])
        {
            exercises.forEach(async element => {
                
            const request = {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("jwtToken") },
                body: JSON.stringify(element)
            };

            
            await fetch(apiUrl + `Exercises/Program/${programId}`, request)
            .then(response => response.json())
            
                
              });
        }
   

}
