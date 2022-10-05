import Weapon from '../weapon';
import { AmmoType, CustomAmmo } from '../ammo-type';
import wepDefaults from '../../constants/wep-defaults';

class CaldwellConversion extends Weapon {
  constructor(
    tree: string = 'Caldwell Conversion Pistol',
    name: string = 'Caldwell Conversion Pistol',
    description: string = 'The Caldwell Conversion Pistol is a single-action six-shot revolver. Slow to reload but sturdy and reliable. Can be used for dual wielding.',
    ammoType: AmmoType = AmmoType.CompactPistol,
    customAmmo: Array<CustomAmmo> = [CustomAmmo.DumDum, CustomAmmo.FMJ],
    damage: number = 104,
    damageData: Array<object> = [{}],
    lightMeleeDamage: number = wepDefaults.pistols.lightMelee,
    heavyMeleeDamage: number = wepDefaults.pistols.heavyMelee,
    baseRpm: number = 44,
    velocity: number = 300,
    handling: number = 66,
    traits: Array<object> = [{name: 'Fanning'}],
  ) {
    super(
      tree, name, description, ammoType,
      customAmmo, damage, damageData,
      lightMeleeDamage, heavyMeleeDamage, baseRpm,
      velocity, handling, traits
    )
  }
}

export const caldwellConversion: Weapon = new CaldwellConversion();
export const caldwellConversionChain: Weapon = new CaldwellConversion(
  undefined,
  'Caldwell Conversion Chain Pistol',
  'Modified single-action revolver that chambers 17 rounds in a revolving chain for sustained fire. Can be used for dual wielding.',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  60,
  undefined,
)
export const caldwellConversionUppercut: Weapon = new CaldwellConversion(
  undefined,
  'Caldwell Conversion Uppercut',
  'Modified single-action revolver that fires more powerful rifle cartridges, but kicks like a mule. Can be used for dual wielding.',
  AmmoType.LongPistol,
  [CustomAmmo.Incendiary, CustomAmmo.Explosive],
  126,
  undefined,
  undefined,
  undefined,
  40,
  410,
  57,
  undefined,
)