import { useState, useEffect } from "react";
import { HourlyWeatherCard } from "./WeatherCard";
import getHourlyData from "../helpers/getHourlyData";
import { HourlyData } from "../helpers/getHourlyData";
import useWeather from "../hooks/useWeather";
import useNight from "../hooks/useNight";

const Carousel = (apiRes: any) => {
	const [hourlyData, setHourlyData] = useState<HourlyData>(
		getHourlyData(apiRes)
	);
	useEffect(() => {
		setHourlyData(getHourlyData(apiRes));
	}, [apiRes]);
	const night = useNight();
	return (
		<div className="mx-6 my-4 md:my-8">
			<h2 className="mb-4 text-3xl font-semibold md:text-5xl font-title text-neutral-900 dark:text-neutral-50">
				Hourly Weather Forecast
			</h2>
			<div className="grid grid-flow-col gap-8 px-4 pt-4 pb-8 overflow-x-scroll md:gap-12 md:pb-12 md:pt-8 scrollbar">
				{hourlyData.map((anHourData) => {
					return (
						<HourlyWeatherCard key={anHourData.time} {...anHourData} night={night} />
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
