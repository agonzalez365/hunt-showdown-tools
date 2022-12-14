import React from 'react';
import { weapons } from '../resources/weapon-list';
import { AmmoType, CustomAmmo } from '../resources/weapons/ammo-type';
import Slider from 'rc-slider';
import './styles/Global.css'
import './styles/WeaponPanel.css';

const defaultWepIndex: number = 0;


class WeaponPanel extends React.Component<
	{}, {
		tree: string,
		name: string,
		description: string,
		ammoType: AmmoType,
		customAmmo: Array<CustomAmmo>,
		damage: number,
		damageData: Array<object>,
		lightMeleeDamage: number,
		heavyMeleeDamage: number,
		baseRpm: number,
		velocity: number,
		handling: number,
		traits: Array<object>
	}> {
	constructor(props: any) {
		super(props);
		this.state = {
			tree: weapons[defaultWepIndex].tree,
			name: weapons[defaultWepIndex].name,
			description: weapons[defaultWepIndex].description,
			ammoType: weapons[defaultWepIndex].ammoType,
			customAmmo: weapons[defaultWepIndex].customAmmo,
			damage: weapons[defaultWepIndex].damage,
			damageData: weapons[defaultWepIndex].damageData,
			lightMeleeDamage: weapons[defaultWepIndex].lightMeleeDamage,
			heavyMeleeDamage: weapons[defaultWepIndex].heavyMeleeDamage,
			baseRpm: weapons[defaultWepIndex].baseRpm,
			velocity: weapons[defaultWepIndex].velocity,
			handling: weapons[defaultWepIndex].handling,
			traits: weapons[defaultWepIndex].traits,
		}
	}

	componentDidMount() {
		window.addEventListener('weapon-change', this.handleWeaponUpdate);
		window.addEventListener('hitbox-change', this.handleHitboxUpdate);
	}

	componentWillUnmount() {
		window.removeEventListener('weapon-change', this.handleWeaponUpdate);
		window.removeEventListener('hitbox-change', this.handleHitboxUpdate);
	}

	handleWeaponUpdate = (event: any) => {
		console.log(typeof event);
		this.setState({
			tree: weapons[event.detail].tree,
			name: weapons[event.detail].name,
			description: weapons[event.detail].description,
			ammoType: weapons[event.detail].ammoType,
			customAmmo: weapons[event.detail].customAmmo,
			damage: weapons[event.detail].damage,
			damageData: weapons[event.detail].damageData,
			lightMeleeDamage: weapons[event.detail].lightMeleeDamage,
			heavyMeleeDamage: weapons[event.detail].heavyMeleeDamage,
			baseRpm: weapons[event.detail].baseRpm,
			velocity: weapons[event.detail].velocity,
			handling: weapons[event.detail].handling,
			traits: weapons[event.detail].traits,
		})
	}

	handleRangeUpdate = (rangeVal: number) => {
	}

	handleHitboxUpdate = () => {

	}

	//todo: test after re-implementing slider
	//todo: account for hitbox modifier
	//damage data will contain sets of damage falloff data for each slope
	//slopeStart
	//slopeRange
	//slopeChange
	calcFalloff = (rangeVal: number, damage: number, damageData: Array<object>) => {
		let falloff: number = 0;

		for(let i = 0; i < damageData.length; i++) {
			if(rangeVal > damageData[i]["slopeStart"]) {
				let rangeAffected: number = rangeVal - damageData[i]["slopeStart"];

				if(rangeAffected > damageData[i]["slopeRange"]) rangeAffected = damageData[i]["slopeRange"];

				falloff += damageData[i]["slopeChange"] * rangeAffected;
			}
		}

		let remainingDamage: number = damage - falloff;
		if(remainingDamage < 0) remainingDamage = 0;
		return remainingDamage;
	}

	calcAffectedRange = () => {

	}

	render() {
		return (
			<div id='weaponPanel'>
				<span id='wepName'>{this.state.name}</span>
				<p id='wepDesc'>"{this.state.description}"</p>
				<span>Weapon Tree: {this.state.tree}</span>
				<span>Ammo Type: {this.state.ammoType}</span>
				<span>Ammo: </span>
				<div id='mainStatContainer'>
					<Bar statName='Damage' val={this.state.damage} maxVal={150} append={''} />
					<RCSlider statName='Range' minVal={0} maxVal={500} append={'m'} rangeHandler={this.handleRangeUpdate} />
					<Bar statName='Rate of Fire' val={this.state.baseRpm} maxVal={400} append={'rpm'} />
					<Bar statName='Handling' val={this.state.handling} maxVal={100} append={'%'} />
					<Bar statName='Reload Speed' val={20} maxVal={30} append={'s'} />
					<Bar statName='Muzzle Velocity' val={this.state.velocity} maxVal={1000} append={'m/s'} />
					<Bar statName='Light Melee Damage' val={this.state.lightMeleeDamage} maxVal={150} append={''} />
					<Bar statName='Heavy Melee Damage' val={this.state.heavyMeleeDamage} maxVal={150} append={''} />
				</div>
			</div>
		);
	}
}

class Bar extends React.Component<{ statName: string, val: number, maxVal: number, append: string }> {
	getPercent(): string {
		const percent: number = this.props.val / this.props.maxVal * 100;
		return percent.toString() + '%';
	}

	render() {
		return (
			<div className='statContainer'>
				<div className='barInfo'>
					<span className='statName'>{this.props.statName}</span>
					<span className='statVal'>{this.props.val}{this.props.append}</span>
				</div>
				<div className='barContainer'>
					<div className='fill' style={{ width: this.getPercent() }}></div>
				</div>
			</div>
		);
	}
}

class RCSlider extends React.Component<{ statName: string, minVal: number, maxVal: number, append: string, rangeHandler: any }, { value: number | number[] }> {
	constructor(props: any) {
		super(props);
		this.state = {
			value: 10
		}
	}

	render() {
		return (
			<div className='slider'>
				<div className='sliderInfo'>
					<span className='statName'>{this.props.statName}</span>
					<span className='statVal'>{this.state.value}{this.props.append}</span>
				</div>
				<div className='barContainer'>
					<Slider
						min={this.props.minVal}
						max={this.props.maxVal}
						step={1}
						draggableTrack={true}
						value={this.state.value}
						onChange={(val) => { this.setState({ value: val }, this.props.rangeHandler(val)); }}
						trackStyle={{
							backgroundColor: '#adb2b2',
							height: '10px',
							borderRadius: '0.1rem'
						}}
						railStyle={{
							height: '10px',
							borderRadius: '0.1rem',
							backgroundColor: '#adb2b2'
						}}
						handleStyle={{
							height: '15px',
							width: '3px',
							backgroundColor: '#adb2b2',
							opacity: '1',
							border: 'none',
							borderRadius: '0.1rem',
						}}
					/>
				</div>
			</div>
		);
	}
}

export default WeaponPanel;