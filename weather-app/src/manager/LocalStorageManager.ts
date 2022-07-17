import { LSCurrent, LSForecast } from "../constants/Constants";
import { Current, Forecast } from "../models";

export default class LSManager {
    constructor() {

    }

    public getCurrent = () => {
        let newCurrent: string | null = localStorage.getItem(LSCurrent);
        if(newCurrent) return JSON.parse(newCurrent);
        return null;
    }

    public getForecast = () => {
        let forecast: string | null = localStorage.getItem(LSForecast);
        if(forecast) return JSON.parse(forecast);
        return [];
    }

    public setCurrent = (current: Current) => {
        localStorage.setItem(LSCurrent, JSON.stringify(current));
    }

    public setForecast = (forecast: Forecast) => {
        localStorage.setItem(LSForecast, JSON.stringify(forecast));
    }
}