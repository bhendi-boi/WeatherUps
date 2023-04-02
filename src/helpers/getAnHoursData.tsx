import { AnHourData } from "./getHourlyData";
export default function getAnHoursData(hourly: any, num: number) {
	const timeStamp = hourly["time"][num];
	function getHour(timeStamp: number) {
		const date = new Date(timeStamp * 1000);
		let currentHours = date.getHours();
		let currentMin = date.getMinutes() === 0 ? "00" : date.getMinutes();
		return currentHours + ":" + currentMin;
	}
	const weatherCode = hourly["weathercode"][num];
	const temp = hourly["temperature_2m"][num];
	const feelsLikeTemp = hourly["apparent_temperature"][num];
	const data: AnHourData = {
		temp,
		weatherCode,
		feelsLikeTemp,
		time: getHour(timeStamp),
	};
	return data;
}
