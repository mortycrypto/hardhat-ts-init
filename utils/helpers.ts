import { network } from "hardhat"
import { BigNumber } from "@ethersproject/bignumber";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { toEth } from "./conversions";

export const calculateDepositFee = (n: BigNumber, fee: number, base: number = 10000) => n.mul(fee).div(base);

export const sendEth = async (from: SignerWithAddress, to: string, amount: number) => {
    await from.sendTransaction({ to, value: toEth(amount) })
}

export const mineBlocks = async (blocks: number) => {
    while (blocks > 0) {
        blocks--;
        await network.provider.request({
            method: "evm_mine",
            params: [],
        });
    }
}

export const increaseTime = async (seconds: number) => {
    await network.provider.send("evm_increaseTime", [seconds]);
}

export const impersonateAccount = async (account: string) => {
    await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [account],
    });
}

export const impersonateAccounts = async (accounts: string[]) => {
    await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: accounts,
    });
}

export const setBalance = async (account: string, ethBalance: BigNumber) => {
    await network.provider.send("hardhat_setBalance", [
        account,
        ethBalance.toHexString(),
    ]);
}