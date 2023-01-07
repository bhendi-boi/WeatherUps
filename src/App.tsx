import { useEffect, useState } from "react";
import Temp from "./components/Temp";
import Caurosel from "./components/Caurosel";

import useWeather from "./hooks/useWeather";
import useLocalStorageState from "./hooks/useLocalStorageState";
import getCords from "./helpers/getCords";
import getCurrentTime from "./helpers/getCurrentTime";

import { GoLocation } from "react-icons/go";
import getADaysData from "./helpers/getADaysData";
import getIcon from "./helpers/getIcon";
import DailyCaurosel from "./components/DailyCaurosel";

const App = () => {
	const [apiRes, setApiRes] = useLocalStorageState("APIRES", null);
	// useEffect(() => {
	// 	async function handleFetch() {
	// 		const response = await useWeather().then((res) => res.json());
	// 		// console.log(response);
	// 		setApiRes(response);
	// 		setCurrentWeather(apiRes["current_weather"]);
	// 	}
	// 	handleFetch();
	// }, []);
	async function handleFetch() {
		const response = await useWeather().then((res) => res.json());
		// console.log(response);
		setApiRes(response);
		setCurrentWeather(apiRes["current_weather"]);
	}
	const [currentWeather, setCurrentWeather] = useState(
		apiRes["current_weather"]
	);
	const [LAT, LON] = getCords(apiRes);
	const CURRENT_TIME: string = getCurrentTime(apiRes);
	const CURRENT_TEMPERATURE = currentWeather["temperature"];
	const TODAYS_DATA = getADaysData(apiRes, 0);
	return (
		<main className="min-h-screen sm:w-3/4 sm:mx-auto dark:text-neutral-200">
			<div className="flex items-center px-6">
				<div className="flex flex-col w-1/2 gap-4 text-4xl dark:text-neutral-50">
					<Temp temp={CURRENT_TEMPERATURE} />
					<span className="inline-flex items-center text-base">
						<GoLocation size={18} /> {LAT} , {LON}
					</span>
				</div>
				<div className="w-1/2 h-full p-8">
					{getIcon(currentWeather.weathercode)}
				</div>
			</div>
			<div className="px-6">
				{" "}
				<Temp temp={TODAYS_DATA.maxTemperature} high /> /{" "}
				<Temp temp={TODAYS_DATA.minTemperature} /> Feels like{" "}
				<Temp temp={TODAYS_DATA.apperantMaxTemperature} />
				<br />
				<span>{CURRENT_TIME}</span>
			</div>
			<Caurosel {...apiRes} />
			<DailyCaurosel {...apiRes} />
			<button onClick={handleFetch}>Fetch</button>
		</main>
	);
};

export default App;
