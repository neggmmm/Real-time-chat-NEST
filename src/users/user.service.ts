import { User } from "@/users/entities/user.entity";
import { Injectable } from "@nestjs/common";

const users: User[] = [
    {
        id: '1',
        email: 'negm@negm.com',
        password: 'hashedpassword',
        refreshToken: 'sometoken'
    }
];
@Injectable()
export class UserService {
    // Service methods would go here
    async findUserById(userId: string): Promise<User | null> {
        return users.find(user => user.id === userId) || null;
    }
}