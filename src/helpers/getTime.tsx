export function getTime(unixTimestamp: number): string {
	const date = new Date(unixTimestamp * 1000);
	let currentHours = date.getHours();
	let currentMin =
		date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	return `${currentHours} : ${currentMin} hrs`;
}
