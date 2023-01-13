import { useState, useEffect } from "react";
import { HourlyWeatherCard } from "./WeatherCard";
import getHourlyData from "../helpers/getHourlyData";
import { HourlyData } from "../helpers/getHourlyData";

const Caurosel = (apiRes: any) => {
	function getOnlyHour(timeStamp: number) {
		const date = new Date(timeStamp * 1000);
		return date.getHours();
	}
	const [currentHour, setCurrentHour] = useState(
		getOnlyHour(apiRes["current_weather"].time)
	);
	const [hourlyData, setHourlyData] = useState<HourlyData>(
		getHourlyData(apiRes["hourly"], currentHour)
	);
	useEffect(() => {
		setHourlyData(getHourlyData(apiRes["hourly"], currentHour));
	}, [currentHour]);

	return (
		<div className="mx-6 my-4">
			<h2 className="mb-4 text-3xl font-semibold font-title text-neutral-800 dark:text-neutral-50">
				Hourly Weather Forecast
			</h2>
			<div className="grid grid-flow-col gap-8 px-4 py-4 pb-8 overflow-x-scroll scrollbar">
				{hourlyData.map((anHourData) => {
					return <HourlyWeatherCard key={anHourData.time} {...anHourData} />;
				})}
			</div>
		</div>
	);
};

export default Caurosel;
