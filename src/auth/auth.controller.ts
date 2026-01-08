import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() dto: LoginDto) {
        const result = this.authService.login(dto);
        return result;
    }

    @Post('register')
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }
}