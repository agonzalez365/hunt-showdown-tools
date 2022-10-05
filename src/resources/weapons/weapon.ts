import { AmmoType, CustomAmmo } from "./ammo-type";

abstract class Weapon {
	public tree: string;
	public name: string;
	public description: string;
	public ammoType: AmmoType;
	public customAmmo: Array<CustomAmmo>;
	public damage: number;
	public damageData: Array<object>;
	public lightMeleeDamage: number;
	public heavyMeleeDamage: number;
	public baseRpm: number;
	public velocity: number;
	public handling: number;
	public traits: Array<object>;

	constructor(
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
	) {
		this.tree = tree;
		this.name = name;
		this.description = description;
		this.ammoType = ammoType;
		this.customAmmo = customAmmo;
		this.damage = damage;
		this.damageData = damageData;
		this.lightMeleeDamage = lightMeleeDamage;
		this.heavyMeleeDamage = heavyMeleeDamage;
		this.baseRpm = baseRpm;
		this.velocity = velocity;
		this.handling = handling;
		this.traits = traits;
	}

	calculateDamage(data: Array<object>) {
		let damage: number = this.damage / 1.3;
	}
}

export default Weapon;