import { IconExtension, IconUrl, initialDay, initialForecast } from "../constants/Constants";
import { Current, Day, Forecast } from "../models/index";


export const mapCurrent = (promise: any) => {
    let current: Current | null = null;
    current = {
        icon: `${IconUrl}${promise?.weather[0]?.icon}${IconExtension}`,
        description: promise?.weather[0]?.description,
        mediumTemperature: fromKelvinToCelsius(promise?.main?.temp),
        minTemperature: fromKelvinToCelsius(promise?.main?.temp_min),
        maxTemperature: fromKelvinToCelsius(promise?.main?.temp_max),
        humidity: promise?.main?.humidity,
        lastUpdate: new Date(),
    };
    return current;
};

export const mapForecast = (promise: any) => {
    let days: Day[] = [];
    let tempForecasts: Forecast[] = [];
    // Create an array to store the api call result
    promise?.list?.forEach((item: any) => {
        let datetime: number = Number(`${item.dt}000`);
        tempForecasts.push({
            day: new Date(datetime).getUTCDate(),
            datetime: datetime,
            icon: `${IconUrl}${item.weather[0]?.icon}${IconExtension}`,
            description: item.weather[0]?.description,
            mediumTemperature: fromKelvinToCelsius(item?.main?.temp),
            maxTemperature: fromKelvinToCelsius(item?.main?.temp_max),
            minTemperature: fromKelvinToCelsius(item?.main?.temp_min)
        });
    });
    // It will divide the previous result using a reducer
    let day: Day;
    tempForecasts.reduce((prevForecast: Forecast, currentForecast: Forecast, index: number) => {
        if(index === 0) {
            day = {
                day: `${currentForecast.day} ${getWeekDay(new Date(currentForecast.datetime))}`,
                forecasts: [{
                    day: currentForecast.day,
                    datetime: currentForecast.datetime,
                    mediumTemperature: currentForecast.mediumTemperature,
                    maxTemperature: currentForecast.maxTemperature,
                    minTemperature: currentForecast.minTemperature,
                    icon: currentForecast.icon,
                    description: currentForecast.description
                }]
            };
            return currentForecast;
        }
        if(prevForecast.day === currentForecast.day && index !== tempForecasts.length - 1) {
            day.forecasts.push({
                day: currentForecast.day,
                datetime: currentForecast.datetime,
                mediumTemperature: currentForecast.mediumTemperature,
                maxTemperature: currentForecast.maxTemperature,
                minTemperature: currentForecast.minTemperature,
                icon: currentForecast.icon,
                description: currentForecast.description
            });
            return currentForecast;
        } else if(prevForecast.day !== currentForecast.day || index !== tempForecasts.length - 1) {
            days.push(day);
            day = {
                day: `${currentForecast.day} ${getWeekDay(new Date(currentForecast.datetime))}`,
                forecasts: [{
                    day: currentForecast.day,
                    datetime: currentForecast.datetime,
                    mediumTemperature: currentForecast.mediumTemperature,
                    maxTemperature: currentForecast.maxTemperature,
                    minTemperature: currentForecast.minTemperature,
                    icon: currentForecast.icon,
                    description: currentForecast.description
                }]
            };
            return currentForecast;
        } else if(prevForecast.day === currentForecast.day && index === tempForecasts.length - 1) {
            day = {
                day: `${currentForecast.day} ${getWeekDay(new Date(currentForecast.datetime))}`,
                forecasts: [...day.forecasts, {
                    day: currentForecast.day,
                    datetime: currentForecast.datetime,
                    mediumTemperature: currentForecast.mediumTemperature,
                    maxTemperature: currentForecast.maxTemperature,
                    minTemperature: currentForecast.minTemperature,
                    icon: currentForecast.icon,
                    description: currentForecast.description
                }]
            };
            days.push(day);
            return currentForecast;
        }
        return currentForecast;
      }, initialForecast);
    return days;
};

export const fromKelvinToCelsius = (temp: number) => {
    return (temp - 273.15).toFixed(1);
};

export const checkNextDay = (datetime: string, days: Day[]) => {
    // let previousDay: number = days[days.length - 1].day;
};

export const getWeekDay = (datetime: Date) => {
    return new Intl.DateTimeFormat('en-GB', {weekday: "long"}).format(datetime);
};