import { FAKERES } from "./useLocalStorageState";
import { useEffect, useState } from "react";

const useWeather = () => {
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			console.log("Geolocation is not available in your browser.");
		}
		function success(position: any) {
			setPosition({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
		}
		function error() {
			console.log("Unable to retrieve your location");
		}
	}, []);

	const QUERY = `https://api.open-meteo.com/v1/forecast?latitude=${position.latitude}&longitude=${position.longitude}&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset&current_weather=true&timeformat=unixtime&timezone=auto`;

	const [apiRes, setApiRes] = useState(FAKERES);
	const [currentWeather, setCurrentWeather] = useState(
		apiRes["current_weather"],
	);
	async function handleFetch() {
		const response = await fetch(QUERY).then((res) => res.json());
		setApiRes(response);
		setCurrentWeather(response["current_weather"]);
	}
	return { apiRes, currentWeather, handleFetch };
};

export default useWeather;
