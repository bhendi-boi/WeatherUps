import getADaysData from "./getADaysData";
export default function getDailyData() {
	let data = [];
	for (let i = 0; i < 6; i++) {
		data.push(getADaysData(i + 1));
	}
	return data;
}
