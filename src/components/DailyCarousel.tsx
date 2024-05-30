import { useState, useEffect } from "react";
import getDailyData from "../helpers/getDailyData";
import { DailyWeatherCard } from "./WeatherCard";

const DailyCarousel = (apiRes: any) => {
	const [dailyData, setDailyData] = useState(getDailyData(apiRes));
	useEffect(() => {
		setDailyData(getDailyData(apiRes));
	}, [apiRes]);
	return (
		<div className="mt-4 md:mt-8">
			<h2 className="mb-4 text-3xl font-semibold md:text-5xl font-title text-neutral-900 dark:text-neutral-50">
				Daily Weather Forecast
			</h2>
			<div className="overflow-hidden h-36 md:h-56 pb-4">
				<ul className="grid grid-flow-col gap-8 overflow-x-auto h-40 md:h-60 py-4">
					{dailyData.map((daily, index) => (
						<DailyWeatherCard key={index} {...daily} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default DailyCarousel;
