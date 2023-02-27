import TeritiaryLink from "./components/TeritiaryLink";
const About = () => {
	return (
		<main className="min-h-[calc(100vh-4.5rem)] sm:w-3/4 sm:mx-auto dark:text-neutral-200 text-neutral-700 md:text-lg">
			<section className="px-4 pb-4 mt-2 md:mt-8">
				<h2 className="my-2 text-2xl font-medium md:text-5xl text-neutral-900 dark:text-neutral-50 font-title">
					Resources
				</h2>
				<h3 className="my-1 text-neutral-800 dark:text-neutral-100">
					Open Meteo API
				</h3>
				<TeritiaryLink
					text="https://open-meteo.com/en/docs"
					href="https://open-meteo.com/en/docs"
				/>
			</section>
			<section className="px-4 pb-4">
				<h2 className="my-2 text-2xl font-medium md:text-5xl text-neutral-900 dark:text-neutral-50 font-title">
					About this App
				</h2>
				<p className="pb-2">
					This app is completely built with React and Tailwind CSS. I took
					inspiration from{" "}
					<TeritiaryLink
						label="Link to the website that inspired me to make this app"
						text="weatherups.netfily.app"
						href="https://weatherups.netlify.app/"
					/>{" "}
					website.
				</p>
				<p>
					You can grab the source code on{" "}
					<TeritiaryLink
						label="Link to source code of this app"
						text="github"
						href="https://github.com/bhendi-boi/weather-app-tailwind"
					/>
					.
				</p>
			</section>
			<section className="px-4">
				<h2 className="my-2 text-2xl font-medium md:text-5xl text-neutral-900 dark:text-neutral-100 font-title">
					About me
				</h2>
				<p className="pb-3">
					I am Jyothikrishna. I am a sophomore from IIITDM, Kancheepuram. You can
					contact me through the following socials or by visiting my{" "}
					<TeritiaryLink href="https://jyothikrishna.vercel.app" text="portfolio" />{" "}
					website.
				</p>
				<ul
					role="list"
					className="flex self-center justify-center col-span-2 gap-4 text-base font-medium"
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
