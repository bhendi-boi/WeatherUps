import { Link, Outlet } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

type IconProps = {
	toggleTheme: () => void;
};

const Nav = () => {
	const { theme, toggleTheme } = useTheme();
	function handleClick() {
		toggleTheme();
	}
	return (
		<>
			<nav className="sticky top-0 left-0 z-10 flex items-center h-16 text-white bg-white shadow-xl font-title drop-shadow-2xl bg-gradient-to-r from-[#2b5876] to-[#4e4376]">
				<div className="flex items-center w-full gap-4 mx-4 sm:mx-auto sm:w-3/4">
					<Link to="/" className="mr-auto">
						<h1 className="text-3xl font-bold md:text-4xl">Weather Ups</h1>
					</Link>
					<Link
						to="/about"
						className="font-semibold relative text-lg md:text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
					>
						About
					</Link>
					<button onClick={handleClick}>
						{theme === "dark" ? (
							<MdOutlineLightMode
								aria-label="switch to light mode"
								size={30}
								className="text-yellow-300 hover:text-yellow-500"
							/>
						) : (
							<MdOutlineDarkMode
								aria-label="switch to dark mode"
								size={30}
								className="text-slate-300 hover:text-slate-50"
							/>
						)}
					</button>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Nav;
