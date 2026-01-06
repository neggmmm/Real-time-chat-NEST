import { HttpCode, Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { UserService } from "@/users/user.service";

@Injectable()
export class AuthService{
    constructor(
        private readonly userService: UserService,
    ) {}

    async login(dto: LoginDto) {
        const user = await this.userService.findUserByPhoneNumber(dto.phoneNumber);
        if (user && user.password === dto.password) {
            return { message: 'Login successful' };
        } else {
            return { message: 'Invalid credentials' };
        }
    }
    async register(dto: RegisterDto) {
        const existingUser = await this.userService.findUserByPhoneNumber(dto.phoneNumber);
        if (existingUser) {
            return { message: 'User already exists' };
        }
        await this.userService.createUser({
            phoneNumber: dto.phoneNumber,
            username: dto.username,
            password: dto.password,
        });
        // Implement registration logic here
        return { message: 'Registration successful' };
    }

}