import { WiCloudy, WiRaindrop } from "react-icons/wi";
import Temp from "./Temp";

type WeatherCardProps = {
	time: string;
	icon?: string;
	highTemp: number;
	lowTemp: number;
	humidity: number;
};
const WeatherCard = ({
	time,
	icon,
	highTemp,
	lowTemp,
}: // humidity,
WeatherCardProps) => {
	return (
		<div className="flex flex-col items-center w-32 h-40 py-2 text-black bg-white rounded-sm shadow-md">
			<span>{time}</span>
			<WiCloudy className="flex-1 w-full h-full" />
			<div className="flex items-center justify-center">
				{" "}
				<Temp temp={highTemp} high /> / <Temp temp={lowTemp} />{" "}
				{/* <WiRaindrop size={30} className="self-center" /> */}
			</div>
		</div>
	);
};

export default WeatherCard;
