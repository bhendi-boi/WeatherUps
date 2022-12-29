import WeatherCard from "./WeatherCard";

const Caurosel = () => {
	return (
		<div className="grid grid-flow-col gap-8 pl-4 overflow-x-scroll ">
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
			<WeatherCard time="4pm" lowTemp={22} highTemp={27} humidity={12} />
		</div>
	);
};

export default Caurosel;
