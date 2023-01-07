import getAnHoursData from "../helpers/getAnHoursData";
import { useState } from "react";
import { HourlyWeatherCard } from "./WeatherCard";

const Caurosel = (apiRes: any) => {
	const [first, setFirst] = useState(getAnHoursData(apiRes, 13));
	const [hourlyData, setHoutlyData] = useState();
	return (
		<div className="mx-6 my-4">
			<h2 className="mb-4 text-3xl font-semibold text-neutral-50">
				Hourly Weather Forecast
			</h2>
			<div className="grid grid-flow-col gap-8 px-4 py-4 overflow-x-scroll scrollbar">
				<HourlyWeatherCard {...first} />
			</div>
		</div>
	);
};

export default Caurosel;
