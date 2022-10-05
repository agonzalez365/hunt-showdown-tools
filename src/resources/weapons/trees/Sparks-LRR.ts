import { AmmoType, CustomAmmo } from '../ammo-type';
import wepDefaults from '../../constants/wep-defaults';
import Weapon from '../weapon';

class SparksLRR extends Weapon {
  constructor(
    tree: string = 'Sparks LRR',
    name: string = 'Sparks LRR',
    description: string = 'Renowned, large-bore, single-shot rifle with good sights. Can put down a bison across a prairie.',
    ammoType: AmmoType = AmmoType.Long,
    customAmmo: Array<CustomAmmo> = [CustomAmmo.Incendiary, CustomAmmo.Poison, CustomAmmo.FMJ],
    damage: number = 149,
    damageData: Array<object> = [{}],
    lightMeleeDamage: number = wepDefaults.rifles.lightMelee,
    heavyMeleeDamage: number = wepDefaults.rifles.heavyMelee,
    baseRpm: number = 38,
    velocity: number = 533,
    handling: number = 73,
    traits: Array<object> = [{}],
  ) {
    super(
      tree, name, description, ammoType,
      customAmmo, damage, damageData,
      lightMeleeDamage, heavyMeleeDamage, baseRpm,
      velocity, handling, traits
    );
  }
}

export const sparks: Weapon = new SparksLRR();
export const sparksSilencer: Weapon = new SparksLRR(
  undefined,
  'Sparks LRR Silencer',
  'Renowned, large-bore single shot rifle modified with a silencer.',
  AmmoType.LongSilenced,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  300,
  71,
  undefined,
);
export const sparksSniper: Weapon = new SparksLRR(
  undefined,
  'Sparks LRR Sniper',
  'Renowned, large-bore, single-shot rifle mounted with a long scope for even greater effectiveness over distance.',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  70,
  [{ name: 'Steady Aim' }],
);
export const sparksPistol: Weapon = new SparksLRR(
  undefined,
  'Sparks Pistol',
  'A Sparks LRR cut down to be a small handgun, the Sparks Pistol delivers equally powerful shots over short to medium ranges. Though small and easy to carry, it loses its power drastically over longer distances, and has stronger recoil because of the missing stock.',
  AmmoType.LongPistol,
  undefined,
  undefined,
  undefined,
  wepDefaults.pistols.lightMelee,
  wepDefaults.pistols.heavyMelee,
  undefined,
  453,
  60,
  undefined,
)