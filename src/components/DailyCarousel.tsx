import { useState,useEffect } from "react";
import getDailyData from "../helpers/getDailyData";
import { DailyWeatherCard } from "./WeatherCard";

const DailyCarousel = (apiRes: any) => {
	const [dailyData,setDailyData] = useState(getDailyData(apiRes));
	useEffect(() => {
		setDailyData(getDailyData(apiRes));
	},[apiRes]);
	return (
		<div className="mt-8">
			<div className="overflow-hidden h-36 md:h-56 pb-4 rounded-md">
				<ul className="grid grid-flow-col overflow-x-auto h-40 md:h-60 pb-4 bg-carousel-background dark:bg-dark-carousel-background ring-2 ring-black/10 px-4">
					{dailyData.map((daily,index) => (
						<DailyWeatherCard key={index} {...daily} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default DailyCarousel;
