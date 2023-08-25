import React from "react";
import { Link , useLocation } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = () => {

	const location = useLocation()
    const { pathname } = location;
    const splitLocation = pathname.split("/");

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								
								className={splitLocation[1] === "" ? "nav-item active" : "nav-item"}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={splitLocation[1] === "about" ? "nav-item active" : "nav-item"}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={splitLocation[1] === "projects" ? "nav-item active" : "nav-item"}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
						     className={splitLocation[1] === "articles" ? "nav-item active" : "nav-item"}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
							  className={splitLocation[1] === "contact" ? "nav-item active" : "nav-item"}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
