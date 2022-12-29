import { BsSun, BsCloudSun, BsCloudRain } from "react-icons/bs";
import { GiFog } from "react-icons/gi";
import { SiCentos } from "react-icons/si";
import { IoThunderstormOutline } from "react-icons/io5";
export default function getIcon(weatherCode: number) {
	if (weatherCode === 0) {
		return <BsSun size={30} />;
	}
	if (weatherCode >= 1 && weatherCode <= 3) {
		return <BsCloudSun className="w-full h-full" />;
	}
	if (weatherCode === 45 || weatherCode === 48) {
		return <GiFog size={30} />;
	}
	if (
		weatherCode === 51 ||
		weatherCode === 52 ||
		weatherCode === 55 ||
		weatherCode === 56 ||
		weatherCode === 57
	) {
		return <SiCentos size={30} />;
	}
	if (
		weatherCode === 61 ||
		weatherCode === 63 ||
		weatherCode === 65 ||
		(weatherCode >= 80 && weatherCode <= 82)
	) {
		return <BsCloudRain size={30} />;
	}
	if (weatherCode === 66 || weatherCode === 67) {
		return;
	}
	if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
		return <IoThunderstormOutline size={30} />;
	}
}
