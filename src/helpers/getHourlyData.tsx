import getAnHoursData from "../helpers/getAnHoursData";
export type AnHourData = {
	time: string;
	weatherCode: number;
	feelsLikeTemp: number;
	temp: number;
};
export type HourlyData = AnHourData[];
export default function getHourlyData(hourly: any, currentHour: number) {
	let data: HourlyData = [];
	for (let i = currentHour; i <= 23; i++) {
		data.push(getAnHoursData(hourly, i));
	}
	return data;
}
