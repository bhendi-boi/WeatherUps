import { motion } from "framer-motion";
import Temp from "./Temp";
import getIcon from "../helpers/getIcon";

type WeatherCardProps = {
	time: string;
	weatherCode: number;
	temp: number;
	feelsLikeTemp: number;
	humidity?: number;
	night?: boolean;
};
export const HourlyWeatherCard = ({
	time,
	weatherCode,
	temp,
	feelsLikeTemp,
	night,
}: WeatherCardProps) => {
	return (
		<motion.li className="flex flex-col items-center w-32 bg-transparent rounded-lg py-2 md:w-40">
			<span className="text-lg font-medium text-slate-900">{time}</span>
			<div className="flex-grow pb-2 text-black">
				{getIcon({ weatherCode,night })}
			</div>
			<div className="flex flex-col items-center justify-center text-slate-700">
				{" "}
				<Temp temp={temp} color="slate-900" high />{" "}
				<span className="text-xs">
					Feels like <Temp temp={feelsLikeTemp} high color="slate-900" />{" "}
				</span>
				{/* <WiRaindrop size={30} className="self-center" /> */}
			</div>
		</motion.li>
	);
};

export type DailyWeatherCardProps = {
	day: string;
	weatherCode: number;
	maxTemperature: number;
	minTemperature: number;
	apparentMaxTemperature: number;
	sunrise: string;
	sunset: string;
};

export const DailyWeatherCard = ({
	day,
	weatherCode,
	maxTemperature,
	minTemperature,
	apparentMaxTemperature: apparentMaxTemperature,
}: DailyWeatherCardProps) => {
	return (
		<motion.li className="flex flex-col items-center w-32 bg-transparent rounded-lg py-2 md:w-40">
			<span className="text-lg font-medium text-slate-900">{day}</span>
			<div className="flex-grow pb-2 text-black">{getIcon({ weatherCode })}</div>
			<div className="flex flex-col items-center justify-center text-slate-700">
				<span>
					<Temp color="slate-900" temp={maxTemperature} high /> /{" "}
					<Temp temp={minTemperature} />
				</span>
				<span className="text-xs">
					Feels like <Temp color="slate-900" high temp={apparentMaxTemperature} />{" "}
				</span>
			</div>
		</motion.li>
	);
};
