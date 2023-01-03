const About = () => {
	return (
		<main className="min-h-screen text-white">
			<section className="px-4 pb-4">
				<h2 className="my-2 text-2xl">Resources</h2>
				<h3 className="my-1">Open Meteo API</h3>
				<a
					href="https://open-meteo.com/en/docs"
					target="_blank"
					className="text-blue-500 relative after:content-[''] after:w-0 after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
				>
					https://open-meteo.com/en/docs
				</a>
			</section>
			<section className="px-4 pb-4">
				<h2 className="my-2 text-2xl">About this App</h2>
				<p className="pb-2">
					This app is completely built with React and Tailwind CSS. I took
					inspiration from{" "}
					<a
						href="https://weatherups.netlify.app/"
						target="_blank"
						className="text-blue-500 relative after:content-[''] after:w-0 after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
					>
						this
					</a>{" "}
					website.
				</p>
				<p>
					You can grab the source code{" "}
					<a
						href="https://github.com/bhendi-boi/weather-app-tailwind"
						target="_blank"
						className="text-blue-500 relative after:content-[''] after:w-0 after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
					>
						here
					</a>
					.
				</p>
			</section>
			<section className="px-4">
				<h2 className="my-2 text-2xl">About me</h2>
				<p className="pb-3">
					I am Jyothikrishna. I am a sophomore from IIITDM, Kancheepuram. You can
					contact me through the following socials.{" "}
				</p>
				<ul
					role="list"
					className="flex self-center justify-center col-span-2 gap-4 text-base font-medium font-chips"
				>
					<li>
						<a
							aria-label="github-icon"
							target="_blank"
							href="https://github.com/bhendi-boi"
							title="Github Profile"
							className="text-blue-500 relative after:content-[''] after:w-0 after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
						>
							Github
						</a>
					</li>
					<li>
						<a
							aria-label="linkedin-icon"
							target="_blank"
							href="https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/"
							title="Linked-in Profile"
							className="text-blue-500 relative after:content-[''] after:w-0 after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
						>
							Linkedin
						</a>
					</li>
					<li>
						<a
							aria-label="gmail-icon"
							target="_blank"
							href="mailto:bhendiisgreen@gmail.com"
							title="mail me"
							className="text-blue-500 relative after:content-[''] after:w-0 after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
						>
							Gmail
						</a>
					</li>
					<li>
						<a
							aria-label="devcommunity-icon"
							target="_blank"
							href="https://dev.to/bhendi"
							title="Dev.to profile"
							className="text-blue-500 relative after:content-[''] after:w-0 after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
						>
							Dev.to
						</a>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default About;
