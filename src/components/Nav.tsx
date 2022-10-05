import React from 'react';
import './styles/Global.css';
import './styles/Nav.css';

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<ul>
					<li className='active'>
						<a href="#">Damage Visualizer</a>
					</li>
					<li className='locked'>
						<a href="#">Loadout Randomizer</a>
					</li>
					<li className='locked'>
						<a href="#">Credits</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;