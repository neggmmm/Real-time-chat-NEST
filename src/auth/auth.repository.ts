import { Injectable } from "@nestjs/common";
import { User } from "../users/entities/user.entity";

@Injectable()
export class AuthRepository {
    // Repository methods would go here
    async findUserByEmail(email: string):Promise<User | null> {
        // Logic to find a user by email
    
    }
    async createUser(user:Partial<User>):Promise<User> {
        // Logic to create a new user
    }
    async updateRefreshToken(userId: string, refreshToken: string) {
        // Logic to update a user's refresh token
    }
}