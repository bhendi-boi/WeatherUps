import getADaysData from "./getADaysData";
export default function getDailyData(apiRes: any) {
	let data = [];
	for (let i = 0; i < 6; i++) {
		data.push(getADaysData(apiRes, i + 1));
	}
	return data;
}
