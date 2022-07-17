import { Current, Day } from "../models";
import * as Constants from '../constants/Constants';
import { mapCurrent, mapForecast } from "../utilities/utilities";

export default class APIManager {
    constructor() {

    }

    public getCurrent = async () => {
        let current: Current | null = null;
        let query: string = `${Constants.BaseUrl}${Constants.TodayEndpoint}?${Constants.APIKey}&${Constants.City}${Constants.London}`;
        try {
            let response = await fetch(query);
            let result = await response.json();
            current = mapCurrent(result);
        } catch(error) {
            console.log(error);
            return current;
        }
    }

    public getForecast = async () => {
        let forecast: Day[] = [];
        let query: string = `${Constants.BaseUrl}${Constants.ForecastEndpoint}?${Constants.APIKey}&${Constants.City}${Constants.London}`;
        try {
            let response = await fetch(query);
            let result = await response.json();
            forecast = mapForecast(result);
        } catch(error) {
            console.log(error);
            return forecast;
        }
    }
};