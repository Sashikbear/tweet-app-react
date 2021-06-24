import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div className="navbar">
			<Link
				to={{
					pathname: "/",
				}}
				style={{ color: "white", textDecoration: "none" }}
				className="nav-item"
			>
				Home
			</Link>

			<Link
				to={{
					pathname: "/profile",
				}}
				style={{ color: "white", textDecoration: "none" }}
				className="nav-item"
			>
				Profile
			</Link>
		</div>
	);
}

export default Navbar;
