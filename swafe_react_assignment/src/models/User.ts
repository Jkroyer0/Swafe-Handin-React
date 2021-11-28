export type User = {
    userId: number;
    firstName: string;
    lastName: string;
    email: string,
    password: string,
    personalTrainerId?: number, //Only set when user is client
    accountType: UserType
}

enum UserType {
    Client = 1,
    PersonalTrainer = 2
}
