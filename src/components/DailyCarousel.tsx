import { useState, useEffect } from "react";
import getDailyData from "../helpers/getDailyData";
import { DailyWeatherCard } from "./WeatherCard";

const DailyCarousel = (apiRes: any) => {
	const [dailyData, setDailyData] = useState(getDailyData(apiRes));
	useEffect(() => {
		setDailyData(getDailyData(apiRes));
	}, [apiRes]);
	return (
		<div className="pb-10 mx-6 my-4">
			<h2 className="mb-4 text-3xl font-semibold md:text-5xl font-title text-neutral-900 dark:text-neutral-50">
				Daily Weather Forecast
			</h2>
			<ul className="grid grid-flow-col gap-8 px-4 pt-4 pb-8 overflow-x-scroll md:gap-12 md:pb-12 md:pt-8 scrollbar">
				{dailyData.map((daily, index) => (
					<DailyWeatherCard key={index} {...daily} />
				))}
			</ul>
		</div>
	);
};

export default DailyCarousel;
