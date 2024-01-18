import { Controller, Get, Param } from '@nestjs/common';
import { TokenService } from '../services/token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('balance/:address')
  async getBalance(@Param('address') address: string): Promise<string> {
    return this.tokenService.getBalance(address);
  }

}
