import { useState,useEffect } from "react";
import { HourlyWeatherCard } from "./WeatherCard";
import getHourlyData from "../helpers/getHourlyData";
import { HourlyData } from "../helpers/getHourlyData";
import useNight from "../hooks/useNight";

const Carousel = (apiRes: any) => {
	const [hourlyData,setHourlyData] = useState<HourlyData>(
		getHourlyData(apiRes)
	);
	useEffect(() => {
		setHourlyData(getHourlyData(apiRes));
	},[apiRes]);
	const night = useNight();
	return (
		<div className="overflow-hidden h-36 md:h-56 pb-4 rounded-md">
			<ul className="grid grid-flow-col bg-carousel-background ring-2 ring-black/10 overflow-x-auto md:h-60 pb-4 h-40 px-4 dark:bg-dark-carousel-background">
				{hourlyData.map((anHourData) => {
					return (
						<HourlyWeatherCard key={anHourData.time} {...anHourData} night={night} />
					);
				})}
			</ul>
		</div>
	);
};

export default Carousel;
