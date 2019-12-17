import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/users.interface';
import { IUserService } from '../interfaces/users-service.interface';
import{CreateUserDto} from '../dtos/create-user.dto'

@Injectable()

export class UserService implements IUserService {
    async findAll(): Promise<User[]> {
        return [];
    }

    async findOne(id: number): Promise<User> {
        return {
            id,
            name: '小明',
            age: 18
        };
    }

    async create(user: CreateUserDto): Promise<User> {
        return {
            id:1,
            name: '小明',
            age: 18
        };
    }

    async edit(user: CreateUserDto): Promise<User> {
        return {
            id:1,
            name: '小明',
            age: 18
        };

    }

    async remove(id:number) {

    }
}
