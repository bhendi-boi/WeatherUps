import { Link, Outlet } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
			<nav className="sticky top-0 left-0 z-10 flex items-center h-16 bg-white shadow-xl">
				<div className="flex items-center w-full gap-4 mx-4 sm:mx-auto sm:w-3/4">
					<Link to="/" className="mr-auto">
						<h1 className="text-3xl font-bold text-neutral-900">Weather Ups</h1>
					</Link>
					<Link
						to="/about"
						className="font-semibold text-neutral-900  relative text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-neutral-900 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:-translate-x-1/4 hover:after:translate-x-0 hover:after:transition after:origin-left after:duration-200"
					>
						About
					</Link>
					<button onClick={handleClick}>
						{theme === "dark" ? (
							<MdLightMode size={30} className="text-amber-400" />
						) : (
							<MdDarkMode size={30} className="" />
						)}
					</button>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Nav;
