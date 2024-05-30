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
		<div>
			<h2 className="mb-4 text-3xl font-semibold md:text-5xl font-title text-neutral-900 dark:text-neutral-50">
				Hourly Weather Forecast
			</h2>
			<div className="overflow-hidden h-36 md:h-56 pb-4">
				<ul className="grid grid-flow-col gap-8 overflow-x-auto md:h-60 py-4 h-40">
					{hourlyData.map((anHourData) => {
						return (
							<HourlyWeatherCard key={anHourData.time} {...anHourData} night={night} />
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Carousel;
