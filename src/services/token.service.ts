import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as ERC20 from '../abis/erc20.json'
import { ERC_20 } from '../utils/contractAddresses';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class TokenService {
  private provider: ethers.JsonRpcProvider;
  private phenomTokenContract: ethers.Contract;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);
    this.phenomTokenContract = new ethers.Contract(
      ERC_20,
      ERC20.abi,
      this.provider
    );
  }

  async getBalance(address: string): Promise<string> {
    const balance = await this.phenomTokenContract.balanceOf(address);
    return ethers.formatEther(balance);
  }

}
