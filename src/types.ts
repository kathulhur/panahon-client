export interface WeatherAPIResponseObject {
    data:    Data;
    message: string;
    status:  number;
}

export interface Data {
    location: Location;
    forecast: Forecast[];
}

export interface Forecast {
    date: string;
    day:  Day;
}

export interface Day {
    avgTempC:  number;
    avgTempF:  number;
    condition: Condition;
    dailyChanceOfRain: number;
    dailyWillItRain: number;
}

export interface Condition {
    text: string;
    icon: string;
}

export interface Location {
    name:      string;
    region:    string;
    country:   string;
    localtime: string;
}


export enum UnitOfMeasure {
    Celsius = 'C',
    Fahrenheit = 'F'
}