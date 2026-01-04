import { User } from "@/users/entities/user.entity";
import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers:[UserService],
    exports:[UserService]
})
export class UserModule {}