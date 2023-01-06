import { motion } from "framer-motion";
import Temp from "./Temp";
import getIcon from "../helpers/getIcon";

type WeatherCardProps = {
	time: string;
	weatherCode: number;
	temp: number;
	feelsLikeTemp: number;
	humidity?: number;
};
export const HourlyWeatherCard = ({
	time,
	weatherCode,
	temp,
	feelsLikeTemp,
}: WeatherCardProps) => {
	return (
		<div className="flex flex-col items-center w-32 h-40 py-2 text-black bg-white rounded-sm shadow-md">
			<span>{time}</span>
			<div className="flex-grow">{getIcon(weatherCode)}</div>
			<div className="flex flex-col items-center justify-center">
				{" "}
				<Temp temp={temp} />{" "}
				<span className="text-xs">
					Feels like <Temp temp={feelsLikeTemp} />{" "}
				</span>
				{/* <WiRaindrop size={30} className="self-center" /> */}
			</div>
		</div>
	);
};

export type DailyWeatherCardProps = {
	day: string;
	weatherCode: number;
	maxTemperature: number;
	minTemperature: number;
	apperantMaxTemperature: number;
};

export const DailyWeatherCard = ({
	day,
	weatherCode,
	maxTemperature,
	minTemperature,
	apperantMaxTemperature,
}: DailyWeatherCardProps) => {
	return (
		<div className="flex flex-col items-center w-32 h-40 py-2 rounded-md drop-shadow-sm bg-slate-50 shadow-neutral-200">
			<span className="text-lg font-medium text-slate-900">{day}</span>
			<div className="flex-grow pb-2 text-black">{getIcon(weatherCode)}</div>
			<div className="flex flex-col items-center justify-center text-slate-700">
				<span>
					<Temp color="slate-900" temp={maxTemperature} high /> /{" "}
					<Temp temp={minTemperature} />
				</span>
				<span className="text-xs">
					Feels like <Temp color={"slate-900"} high temp={apperantMaxTemperature} />{" "}
				</span>
			</div>
		</div>
	);
};
