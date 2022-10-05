import React from 'react';
import './styles/Global.css'
import './styles/WeaponList.css';
import { weapons } from '../resources/weapon-list';

class WeaponList extends React.Component {
	render() {
		return (
			<div id='weaponList'>
				{weapons.map((weapon, index) => {
					return (
						<Weapon name={weapon.name} id={index} key={weapon.name} />
					)
				})}
			</div>
		);
	}
}

class Weapon extends React.Component<{ name: string, id: number, key: string }> {
	handleClick = () => {
		console.log(weapons[this.props.id]);
		const weaponChangeEvent = new CustomEvent('weapon-change', { detail: this.props.id });
		window.dispatchEvent(weaponChangeEvent);
	}

	render() {
		return (
			<div className='weapon' onClick={this.handleClick}>
				<span>{this.props.name}</span>
			</div>
		);
	}
}

export default WeaponList;