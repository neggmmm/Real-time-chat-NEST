import { User } from "@/users/entities/user.entity";
import { Module } from "@nestjs/common";
import { UserService } from "./user.service";


@Module({
    providers:[UserService],
    exports:[UserService]
})
export class UserModule {}