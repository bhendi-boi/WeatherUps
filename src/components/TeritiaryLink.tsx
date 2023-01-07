type TeritiaryLinkProps = {
	text: string;
	href: string;
};
const TeritiaryLink = ({ text, href }: TeritiaryLinkProps) => {
	return (
		<a
			href={href}
			target="_blank"
			className="text-blue-500 relative after:content-[''] after:w-0 after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
		>
			{text}
		</a>
	);
};

export default TeritiaryLink;
