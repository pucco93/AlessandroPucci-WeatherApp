import { Hour } from "./Hour";

export type Current = {
    icon: string;
    description: string;
    mediumTemperature: string;
    minTemperature: string;
    maxTemperature: string;
    humidity: number;
    lastUpdate: Date;
    /* hours: Hour[]; */
};