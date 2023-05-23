import { useEffect, useState } from "react";
import Temp from "./components/Temp";
import Carousel from "./components/Carousel";
import DailyCarousel from "./components/DailyCarousel";
import { GoLocation } from "react-icons/go";

import useWeather from "./hooks/useWeather";
import useNight from "./hooks/useNight";
import getCords from "./helpers/getCords";
import getCurrentTime from "./helpers/getCurrentTime";
import getADaysData from "./helpers/getADaysData";
import getIcon from "./helpers/getIcon";

import { VscRefresh } from "react-icons/vsc";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { getTime } from "./helpers/getTime";
import { isNight } from "./helpers/isNight";

const App = () => {
	const { apiRes, currentWeather, handleFetch } = useWeather();
	const night = useNight();
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
	const [LAT, LON] = getCords(apiRes);
	const CURRENT_TIME = getCurrentTime(apiRes);
	const CURRENT_TEMPERATURE = currentWeather["temperature"];
	const TODAYS_DATA = getADaysData(apiRes, 0);
	return (
		<main className="min-h-screen sm:w-3/4 sm:mx-auto text-neutral-700 dark:text-neutral-200">
			<div className="flex items-center px-6">
				<div className="flex flex-col justify-center w-1/2 text-4xl text-neutral-900 dark:text-neutral-50">
					<Temp temp={CURRENT_TEMPERATURE} high color=" md:text-9xl" />
					<span className="inline-flex items-center mt-4 mb-1 text-base font-medium md:ml-3 md:text-lg">
						<GoLocation size={18} className="mr-1" /> {LAT} , {LON}
					</span>
					<span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide md:ml-4 opacity-70">
						All temperature are displayed in celsius
						<VscRefresh
							className="cursor-pointer"
							aria-label="Refresh Button"
							size={26}
							onClick={handleFetch}
						/>
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
				<Temp temp={TODAYS_DATA.apparentMaxTemperature} />
				<br />
				<span>{CURRENT_TIME}</span>
			</div>
			<div className="flex h-28 md:h-40 my-8 md:max-w-lg mx-4 md:mx-auto gap-4 md:gap-10">
				<div className="flex-1 text-center bg-white rounded-lg shadow-lg">
					<WiSunrise className="w-full h-2/3 md:h-4/5 text-amber-600" />
					<p className="text-black font-title">
						{getTime(apiRes["daily"]["sunrise"][0])}
					</p>
				</div>
				<div className="flex-1 text-center bg-white rounded-lg shadow-lg">
					<WiSunset className="w-full h-2/3 md:h-4/5 text-amber-400" />
					<p className="text-black font-title">
						{getTime(apiRes["daily"]["sunset"][0])}
					</p>
				</div>
			</div>
			<Carousel {...apiRes} />
			<DailyCarousel {...apiRes} />
		</main>
	);
};

export default App;
