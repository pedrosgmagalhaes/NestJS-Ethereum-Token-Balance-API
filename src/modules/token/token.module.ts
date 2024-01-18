import { Module } from '@nestjs/common';
import { TokenService } from '../../services/token.service';
import { TokenController } from '../../controllers/token.controller';

@Module({
    providers: [TokenService],
    controllers: [TokenController],
})
export class TokenModule { }
