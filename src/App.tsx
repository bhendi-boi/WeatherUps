import { useEffect, useState } from "react";
import Temp from "./components/Temp";
import Caurosel from "./components/Caurosel";
import DailyCaurosel from "./components/DailyCaurosel";
import { GoLocation } from "react-icons/go";

import useWeather from "./hooks/useWeather";
import useLocalStorageState from "./hooks/useLocalStorageState";
import getCords from "./helpers/getCords";
import getCurrentTime from "./helpers/getCurrentTime";
import getADaysData from "./helpers/getADaysData";
import getIcon from "./helpers/getIcon";
import { FAKERES } from "./hooks/useLocalStorageState";

const App = () => {
	const [coOrds, setCoOrds] = useState({
		lat: "1",
		long: "1",
	});
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(findCords, error, {
			timeout: 100000,
		});
		function findCords(position: any) {
			setCoOrds({
				lat: position.coords.latitude,
				long: position.coords.longitude,
			});
		}
		function error() {
			console.log("error");
		}
		const id = navigator.geolocation.watchPosition(findCords, error);
		navigator.geolocation.clearWatch(id);
		handleFetch();
	}, []);

	const [apiRes, setApiRes] = useLocalStorageState("APIRES", FAKERES);
	async function handleFetch() {
		const response = await useWeather().then((res) => res.json());
		setApiRes(response);
		setCurrentWeather(response["current_weather"]);
	}
	const [currentWeather, setCurrentWeather] = useState(
		apiRes["current_weather"]
	);
	const [LAT, LON] = getCords(apiRes);
	const CURRENT_TIME: string = getCurrentTime(apiRes);
	const CURRENT_TEMPERATURE = currentWeather["temperature"];
	const TODAYS_DATA = getADaysData(apiRes, 0);
	const night = new Date().getHours() > 18;
	console.log(night);
	return (
		<main className="min-h-screen sm:w-3/4 sm:mx-auto text-neutral-700 dark:text-neutral-200">
			<div className="flex items-center px-6">
				<div className="flex flex-col justify-center w-1/2 text-4xl text-neutral-900 dark:text-neutral-50">
					<Temp temp={CURRENT_TEMPERATURE} high color=" md:text-9xl" />
					<span className="inline-flex items-center mt-4 mb-1 text-base font-medium md:ml-3 md:text-lg">
						<GoLocation size={18} className="mr-1" /> {LAT} , {LON}
					</span>
					<span className="inline-flex items-center text-xs md:text-sm font-medium tracking-wide md:ml-4 opacity-70">
						All temperature are displayed in celcius
					</span>
				</div>
				<div className="w-1/2 h-full p-8 md:p-16 text-neutral-900 dark:text-neutral-50">
					{getIcon({ weatherCode: currentWeather.weathercode, night: night })}
				</div>
			</div>
			<div className="px-6 md:ml-4 md:text-lg text-neutral-800 dark:text-neutral-200">
				{" "}
				<Temp
					temp={TODAYS_DATA.maxTemperature}
					high
					color="neutral-800 dark:text-neutral-50"
				/>{" "}
				/ <Temp temp={TODAYS_DATA.minTemperature} /> Feels like{" "}
				<Temp temp={TODAYS_DATA.apperantMaxTemperature} />
				<br />
				<span>{CURRENT_TIME}</span>
			</div>
			<Caurosel {...apiRes} />
			<DailyCaurosel {...apiRes} />
		</main>
	);
};

export default App;
