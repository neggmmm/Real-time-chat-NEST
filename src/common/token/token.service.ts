import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenService {
    constructor(private readonly config: ConfigService) {}
    generateToken(userId: string): string {
        return jwt.sign({sub : userId}, this.config.getOrThrow<string>('JWT_ACCESS_SECRET'), { expiresIn: '15m' });
    }

    verifyToken(token: string): any {
        return jwt.verify(token, this.config.getOrThrow<string>('JWT_ACCESS_SECRET'));
    }
}