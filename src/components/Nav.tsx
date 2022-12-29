import { Link, Outlet } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type IconProps = {
	toggleTheme: () => void;
};

const Nav = () => {
	const [theme, toggleTheme] = useTheme();
	function handleClick() {
		toggleTheme();
	}
	return (
		<>
			<nav className="static top-0 left-0 z-10 flex items-center h-16 bg-white">
				<div className="flex items-center w-full gap-4 mx-4 sm:mx-auto sm:w-3/4">
					<Link to="/" className="flex-1">
						<h1 className="text-3xl">Weather Ups</h1>
					</Link>
					<Link to="/about">About</Link>
					<button onClick={handleClick}>
						{theme === "light" ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
					</button>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Nav;
