export enum UnitOfMeasure {
    Celsius,
    Fahrenheit,
}

export interface ForecastResponse {
    location: Location;
    current: Current;
    forecast: Forecast;
}

export interface Current {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    feelslike_c: number;
    feelslike_f: number;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Forecast {
    forecastday: Forecastday[];
}

export interface Forecastday {
    date: Date;
    day: Day;
}

export interface Day {
    avgtemp_c: number;
    avgtemp_f: number;
    totalsnow_cm: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    condition: Condition;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}
