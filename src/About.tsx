import TertiaryLink from "./components/TertiaryLink";

const About = () => {
	return (
		<main className="min-h-[calc(100vh-4.5rem)] text-neutral-700 dark:text-neutral-200 sm:mx-auto sm:w-3/4 md:text-lg">
			<section className="mt-2 px-4 pb-4 md:mt-8">
				<h2 className="my-2 font-title text-xl font-medium text-neutral-900 dark:text-neutral-50 md:text-5xl">
					Resources
				</h2>
				<h3 className="my-1 text-neutral-800 dark:text-neutral-100">
					Open Meteo API
				</h3>
				<TertiaryLink
					text="https://open-meteo.com/en/docs"
					href="https://open-meteo.com/en/docs"
				/>
			</section>
			<section className="px-4 pb-4">
				<h2 className="my-2 font-title text-xl font-medium text-neutral-900 dark:text-neutral-50 md:text-5xl">
					About this App
				</h2>
				<p>
					This app is completely built with React and Tailwind CSS. I took
					inspiration from{" "}
					<TertiaryLink
						label="Link to the website that inspired me to make this app"
						text="weatherups.netfily.app"
						href="https://weatherups.netlify.app/"
					/>{" "}
					website.
				</p>
				<p>
					You can grab the source code on{" "}
					<TertiaryLink
						label="Link to source code of this app"
						text="github"
						href="https://github.com/bhendi-boi/weather-app-tailwind"
					/>
					.
				</p>
			</section>
			<section className="px-4">
				<h2 className="my-2 font-title text-xl font-medium text-neutral-900 dark:text-neutral-100 md:text-5xl">
					About me
				</h2>
				<p className="pb-3">
					I am Jyothikrishna, a freelance frontend developer from India with 2+ years
					of experience with React/NextJS and tailwindcss. You can find my socials
					below.
				</p>
				<ul
					role="list"
					className="col-span-2 flex justify-center gap-4 self-center text-base font-medium"
				>
					<li>
						<a
							aria-label="github-icon"
							target="_blank"
							href="https://github.com/bhendi-boi"
							title="Github Profile"
							className="relative text-blue-500 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:origin-left after:-translate-x-1/4 after:bg-blue-500 after:duration-200 after:content-[''] hover:after:w-full hover:after:translate-x-0 hover:after:transition"
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
							className="relative text-blue-500 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:origin-left after:-translate-x-1/4 after:bg-blue-500 after:duration-200 after:content-[''] hover:after:w-full hover:after:translate-x-0 hover:after:transition"
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
							className="relative text-blue-500 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:origin-left after:-translate-x-1/4 after:bg-blue-500 after:duration-200 after:content-[''] hover:after:w-full hover:after:translate-x-0 hover:after:transition"
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
							className="relative text-blue-500 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:origin-left after:-translate-x-1/4 after:bg-blue-500 after:duration-200 after:content-[''] hover:after:w-full hover:after:translate-x-0 hover:after:transition"
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
