import { Day, Forecast } from "../models";

export const APIKey: string = "appid=8c394a9f31fa09d0ee8601fa09f6218b";
export const City: string = "q=";
export const London: string = "London";
export const BaseUrl: string = "https://api.openweathermap.org/data/2.5/";
export const TodayEndpoint: string = "weather";
export const ForecastEndpoint: string = "forecast";
export const IconUrl: string = "http://openweathermap.org/img/wn/";
export const IconExtension: string = "@2x.png";

export const initialForecast: Forecast = {
    datetime: 0,
    day: 0,
    maxTemperature: "",
    minTemperature: "",
    mediumTemperature: "",
    icon: "",
    description: ""
};

export const initialDay: Day = {
    day: "",
    forecasts: []  
};

/**
 * LocalStorage variable names
 * They are meant to be recognizable
 * LS stands for LocalStorage,
 * AP stands for Alessandro Pucci
 */
export const LSCurrent: string = "LSAPWeatherCurrent";
export const LSForecast: string = "LSAPWeatherForecast";