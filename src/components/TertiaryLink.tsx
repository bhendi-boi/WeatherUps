type TertiaryLinkProps = {
	text: string;
	href: string;
	label?: string;
};
const TertiaryLink = ({ text,href,label }: TertiaryLinkProps) => {
	return (
		<a
			href={href}
			target="_blank"
			aria-label={label}
			className="text-blue-500 font-medium"
		>
			{text}
		</a>
	);
};

export default TertiaryLink;
