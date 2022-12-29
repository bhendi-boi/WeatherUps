type TempProps = {
	temp: number;
	high?: boolean;
};

const Temp = ({ temp, high }: TempProps) => {
	return (
		<span className={"after:content-['°'] " + (high ? "font-medium" : "")}>
			{temp}
		</span>
	);
};

export default Temp;
