import { caldwellConversion, caldwellConversionChain, caldwellConversionUppercut } from "./weapons/trees/Caldwell-Conversion";
import { sparks, sparksPistol, sparksSilencer, sparksSniper } from "./weapons/trees/Sparks-LRR";
import Weapon from "./weapons/weapon";

export const weapons: Array<Weapon> = [
  caldwellConversion,
  caldwellConversionChain,
  caldwellConversionUppercut,

  sparks,
  sparksPistol,
  sparksSilencer,
  sparksSniper,
]