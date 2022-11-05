import React from 'react';
import './styles/Global.css';
import './styles/Nav.css';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<NavLink to="damage-visualizer" >Damage Visualizer</NavLink>
					</li>
					<li>
						<NavLink  to="stat-tracker" >Stat Tracker</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;