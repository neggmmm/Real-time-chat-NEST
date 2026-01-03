import { Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login() {
        return { message: 'Login successful' };
    }
}