import getAnHoursData from "../helpers/getAnHoursData";
import { useState } from "react";
import { HourlyWeatherCard } from "./WeatherCard";

const Caurosel = (apiRes: any) => {
	const [first, setFirst] = useState(getAnHoursData(apiRes, 10));
	const [hourlyData, setHoutlyData] = useState();
	return (
		<div className="grid grid-flow-col gap-8 pb-2 pl-4 overflow-x-scroll scrollbar ">
			<HourlyWeatherCard {...first} />
		</div>
	);
};

export default Caurosel;
