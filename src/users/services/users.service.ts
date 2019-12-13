import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/users.interface';
import { IUserService } from '../interfaces/users-service.interface';

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

    // async create() {
        
    // }

    // async edit() {

    // }

    // async remove() {

    // }
}
