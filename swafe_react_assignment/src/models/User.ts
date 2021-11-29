import Manager from "../pages/Manager";

export type User = {
    userId: number;
    firstName: string;
    lastName: string;
    email: string,
    password: string,
    personalTrainerId?: number, //Only set when user is client
    accountType: string
}

export enum UserType {
    Client = 1,
    PersonalTrainer = 2,
    Manager = 3
}
