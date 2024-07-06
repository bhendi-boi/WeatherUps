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
	let TIMEZONE: string = apiRes["timezone_abbreviation"];

	if (TIMEZONE[0] === "+" || TIMEZONE[0] === "-") {
		let sign = TIMEZONE[0];
		let hr = TIMEZONE.slice(1, 3);
		let min = TIMEZONE.slice(3);
		TIMEZONE = "(" + sign + hr + ":" + min + " UTC)";
	}

	const date = new Date(timeStamp * 1000);
	let currentHours = date.getHours();
	let currentMin = date.getMinutes();
	return (
		getCurrentDay(date.getDay()) +
		", " +
		currentHours +
		":" +
		(currentMin === 0 ? "00" : currentMin) +
		" " +
		TIMEZONE
	);
}
export default getCurrentTime;
