function getCurrentTime(apiRes: any) {
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
	const timeStamp = apiRes["current_weather"]["time"];
	const TIMEZONE = apiRes["timezone_abbreviation"];
	const date = new Date(timeStamp * 1000);
	let currentHours = date.getHours();
	let currentMin = date.getMinutes();
	return (
		getCurrentDay(date.getDay()) +
		", " +
		currentHours +
		":" +
		currentMin +
		" " +
		TIMEZONE
	);
}
export default getCurrentTime;
