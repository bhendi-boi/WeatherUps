export default function getADaysData(apiRes: any, num: number) {
	const daily = apiRes["daily"];
	const weatherCode = daily["weathercode"][num];
	const maxTemperature = daily["temperature_2m_max"][num];
	const minTemperature = daily["temperature_2m_min"][num];
	const apperantMaxTemperature = daily["apparent_temperature_max"][num];
	return {
		weatherCode,
		maxTemperature,
		minTemperature,
		apperantMaxTemperature,
	};
}
