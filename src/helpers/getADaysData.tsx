export default function getADaysData(num: number) {
	const apiRes = JSON.parse(localStorage.getItem("APIRES") || "");
	const daily = apiRes["daily"];
	const weatherCode = daily["weathercode"][num];
	const maxTemperature = daily["temperature_2m_max"][num];
	const minTemperature = daily["temperature_2m_min"][num];
	const apperantMaxTemperature = daily["apparent_temperature_max"][num];
	function getCurrentDay(num: number) {
		switch (num) {
			case 1:
				return "Mon";
			case 2:
				return "Tue";
			case 3:
				return "Wed";
			case 4:
				return "Thu";
			case 5:
				return "Fri";
			case 6:
				return "Sat";
			case 0:
				return "Sun";
			default:
				return "";
		}
	}
	const timeStamp = daily["time"][num];
	const date = new Date(timeStamp * 1000);
	return {
		day: getCurrentDay(date.getDay()),
		weatherCode,
		maxTemperature,
		minTemperature,
		apperantMaxTemperature,
	};
}
