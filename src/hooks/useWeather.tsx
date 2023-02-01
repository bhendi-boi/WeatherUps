import { FAKERES } from "./useLocalStorageState";
import { useState } from "react";

const QUERY =
	"https://api.open-meteo.com/v1/forecast?latitude=13.09&longitude=80.28&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset&current_weather=true&timeformat=unixtime&timezone=auto";
const useWeather = () => {
	const [apiRes, setApiRes] = useState(FAKERES);
	const [currentWeather, setCurrentWeather] = useState(
		apiRes["current_weather"]
	);
	async function handleFetch() {
		const response = await fetch(QUERY).then((res) => res.json());
		setApiRes(response);
		setCurrentWeather(response["current_weather"]);
	}
	return { apiRes, currentWeather, handleFetch };
};

export default useWeather;
