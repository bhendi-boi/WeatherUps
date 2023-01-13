import {
	BsSun,
	BsCloudSun,
	BsCloudRain,
	BsCloudMoon,
	BsMoon,
} from "react-icons/bs";
import { WiDayFog, WiNightFog } from "react-icons/wi";
import { SiCentos } from "react-icons/si";
import { IoThunderstormOutline } from "react-icons/io5";
type getIconProps = {
	weatherCode: number;
	night?: boolean;
};

export default function getIcon({ weatherCode, night = false }: getIconProps) {
	if (weatherCode === 0) {
		if (night) {
			return <BsMoon className="w-full h-full" />;
		}
		return <BsSun className="w-full h-full" />;
	}
	if (weatherCode >= 1 && weatherCode <= 3) {
		if (night) {
			return <BsCloudMoon className="w-full h-full" />;
		}
		return <BsCloudSun className="w-full h-full" />;
	}
	if (weatherCode === 45 || weatherCode === 48) {
		if (night) {
			return <WiNightFog className="w-full h-full" />;
		}
		return <WiDayFog className="w-full h-full" />;
	}
	if (
		weatherCode === 51 ||
		weatherCode === 52 ||
		weatherCode === 55 ||
		weatherCode === 56 ||
		weatherCode === 57
	) {
		return <SiCentos className="w-full h-full" />;
	}
	if (
		weatherCode === 61 ||
		weatherCode === 63 ||
		weatherCode === 65 ||
		(weatherCode >= 80 && weatherCode <= 82)
	) {
		return <BsCloudRain className="w-full h-full" />;
	}
	if (weatherCode === 66 || weatherCode === 67) {
		return;
	}
	if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
		return <IoThunderstormOutline className="w-full h-full" />;
	}
}
