import { Exercise } from "./Exercise"

export type Program = {
    programId: number;
    name: string;
    description: string;
    exercises: Exercise[];
    trainerId: number;
    clientId: number;
}