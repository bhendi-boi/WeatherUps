import getDailyData from "../helpers/getDailyData";
import { DailyWeatherCard } from "./WeatherCard";

const DailyCaurosel = (apiRes: any) => {
	const dailyData = getDailyData(apiRes);
	return (
		<div className="mx-6 my-4 pb-10">
			<h2 className="mb-4 text-3xl font-semibold font-title text-neutral-800  dark:text-neutral-50">
				Daily Weather Forecast
			</h2>
			<div className="grid grid-flow-col gap-8 px-4 py-4 pb-8 overflow-x-scroll scrollbar horizantal-scroll">
				{dailyData.map((daily, index) => (
					<DailyWeatherCard key={index} {...daily} />
				))}
			</div>
		</div>
	);
};

export default DailyCaurosel;
