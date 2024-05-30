export type APIRES = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;

    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        time: number,
    },

    hourly_units: {
        time: "unixtime",
        temperature_2m: "°C",
        apparent_temperature: "°C",
        weathercode: "wmo code",
    },

    hourly: {
        time: Array<number>,
        temperature_2m: Array<number>,
        apparent_temperature: Array<number>,
        weathercode: Array<number>,
    },
    daily_units: {
        time: "unixtime",
        weathercode: "wmo code",
        temperature_2m_max: "°C",
        temperature_2m_min: "°C",
        apparent_temperature_max: "°C",
        sunrise: "unixtime",
        sunset: "unixtime",
    },

    daily: {
        time: Array<number>,
        weathercode: Array<number>,
        temperature_2m_max: Array<number>,
        temperature_2m_min: Array<number>,apparent_temperature_max: Array<number>,
        sunrise: Array<number>,
        sunset: Array<number>
    },
};

