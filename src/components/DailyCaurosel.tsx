import getDailyData from "../helpers/getDailyData";
import { DailyWeatherCard } from "./WeatherCard";

const DailyCaurosel = (apiRes: any) => {
	const dailyData = getDailyData(apiRes);
	return (
		<div className="grid grid-flow-col gap-8 pb-2 pl-4 overflow-x-scroll scrollbar">
			{dailyData.map((daily, index) => (
				<DailyWeatherCard key={index} {...daily} />
			))}
		</div>
	);
};

export default DailyCaurosel;
