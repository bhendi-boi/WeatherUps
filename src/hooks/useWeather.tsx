const useWeather = () => {
	return fetch(
		"https://api.open-meteo.com/v1/forecast?latitude=13.09&longitude=80.28&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max&current_weather=true&timeformat=unixtime&timezone=auto"
	);
};

export default useWeather;
