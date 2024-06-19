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
import SunriseSunset from "./components/SunriseSunset";

const App = () => {
	const { apiRes, currentWeather, handleFetch } = useWeather();
	const night = useNight();

	const [LAT, setLAT] = useState(0);
	const [LON, setLON] = useState(0);

	useEffect(() => {
		handleFetch();
		const { LAT: lat, LON: lon } = getCords(apiRes);
		setLAT(lat);
		setLON(lon);
	}, []);

	const CURRENT_TIME = getCurrentTime(apiRes);
	const CURRENT_TEMPERATURE = currentWeather["temperature"];
	const TODAYS_DATA = getADaysData(apiRes, 0);
	return (
		<main className="px-6 pb-8 text-text dark:text-dark-text sm:mx-auto sm:w-3/4 md:pb-12">
			<div className="flex items-center">
				<div className="flex w-1/2 flex-col justify-center text-4xl text-neutral-900 dark:text-neutral-50">
					<Temp temp={CURRENT_TEMPERATURE} high color=" md:text-9xl" />
					<span className="mb-1 mt-4 inline-flex items-center text-base font-medium md:ml-3 md:text-lg">
						<GoLocation size={18} className="mr-1" /> {LAT} , {LON}
					</span>
					<span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide opacity-70 md:ml-4 md:text-sm">
						All temperature are displayed in celsius
						<VscRefresh
							className="cursor-pointer"
							aria-label="Refresh Button"
							size={26}
							onClick={handleFetch}
						/>
					</span>
				</div>
				<div className="h-full w-1/2 p-8 text-neutral-900 dark:text-neutral-50 md:p-16">
					{getIcon({ weatherCode: currentWeather.weathercode, night: night })}
				</div>
			</div>
			<div className="md:ml-4 md:text-lg">
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
			<SunriseSunset apiRes={apiRes} />
			<Carousel {...apiRes} />
			<DailyCarousel {...apiRes} />
		</main>
	);
};

export default App;
