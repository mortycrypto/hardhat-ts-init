import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { formatEther, parseEther } from "@ethersproject/units";

export const toEth = (n: string | number) => parseEther(n.toString());
export const fromEth = (n: BigNumberish) => formatEther(n.toString());
export const toBN = (n: BigNumberish) => BigNumber.from(n);
export const fromBN = (n: BigNumber) => n.toString();