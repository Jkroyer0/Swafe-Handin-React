export type Exercise = {
    exerciseId: number;
    name: string;
    description: string;
    sets: number;
    repetitions?: number;
    time?: string;
    programId: number;
    trainerId: number;
}