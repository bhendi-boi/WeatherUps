import getAnHoursData from "../helpers/getAnHoursData";
export type AnHourData = {
	time: string;
	weatherCode: number;
	feelsLikeTemp: number;
	temp: number;
};
export type HourlyData = AnHourData[];
export default function getHourlyData(apiRes: any) {
	function getOnlyHour(timeStamp: number) {
		const date = new Date(timeStamp * 1000);
		return date.getHours();
	}
	let data: HourlyData = [];
	const currentHour = getOnlyHour(apiRes["current_weather"].time);
	for (let i = currentHour; i <= 23; i++) {
		data.push(getAnHoursData(apiRes["hourly"], i));
	}
	return data;
}
