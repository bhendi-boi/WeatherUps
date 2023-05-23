import { DailyWeatherCardProps } from "../components/WeatherCard";
export default function getADaysData(apiRes: any, num: number) {
	const daily = apiRes["daily"];
	const weatherCode = daily["weathercode"][num];
	const maxTemperature = daily["temperature_2m_max"][num];
	const minTemperature = daily["temperature_2m_min"][num];
	const apparentMaxTemperature = daily["apparent_temperature_max"][num];
	function getCurrentDay(date: Date) {
		const num = date.getDay();
		const todaysDate = date.getDate();
		const month = date.getMonth();
		function formatTodaysDate(todaysDate: number, month: number): string {
			return month + 1 + "/" + todaysDate.toString();
		}
		let day = "";
		switch (num) {
			case 1:
				day += "Mon";
				break;
			case 2:
				day += "Tue";
				break;
			case 3:
				day += "Wed";
				break;

			case 4:
				day += "Thu";
				break;

			case 5:
				day += "Fri";
				break;

			case 6:
				day += "Sat";
				break;

			case 0:
				day += "Sun";
				break;

			default:
				return "";
		}
		return day + ", " + formatTodaysDate(todaysDate, month);
	}
	const timeStamp = daily["time"][num];
	const date = new Date(timeStamp * 1000);
	return {
		day: getCurrentDay(date),
		weatherCode,
		maxTemperature,
		minTemperature,
		apparentMaxTemperature: apparentMaxTemperature,
	} as DailyWeatherCardProps;
}
