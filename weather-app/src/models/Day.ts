import { Forecast } from './index';

export type Day = {
    day: string;
    forecasts: Forecast[];
};