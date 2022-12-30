export default function getAnHoursData(num: number) {
	const apiRes = JSON.parse(localStorage.getItem("APIRES") || "");
	// if (!apiRes) {
	// 	return undefined;
	// }
	const timeStamp = apiRes["hourly"]["time"][num];
	function getHour(timeStamp: number) {
		const date = new Date(timeStamp * 1000);
		let currentHours = date.getHours();
		let currentMin = date.getMinutes();
		return currentHours + ":" + currentMin;
	}
	return {
		time: getHour(timeStamp),
		weatherCode: 2,
		temp: 28,
		feelsLikeTemp: 23,
	};
}
