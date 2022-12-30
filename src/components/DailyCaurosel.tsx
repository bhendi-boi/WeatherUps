import getDailyData from "../helpers/getDailyData";
import { DailyWeatherCard } from "./WeatherCard";

const DailyCaurosel = () => {
	const dailyData = getDailyData();
	return (
		<div className="grid grid-flow-col gap-8 pl-4 overflow-x-scroll ">
			{dailyData.map((daily, index) => (
				<DailyWeatherCard key={index} {...daily} />
			))}
		</div>
	);
};

export default DailyCaurosel;
