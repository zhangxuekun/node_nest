import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { IUserService } from '../interfaces/user-service.interface';
import{CreateUserDto} from '../dtos/create-user.dto'

@Injectable()

export class UserService implements IUserService {


    private static users: User[] = [
        { id: 1, name: '小明', age: 18 },
        { id: 2, name: '小红', age: 16 },
        { id: 3, name: '小壮', age: 20 },
    ];


    async findAll(): Promise<User[]> {
        return UserService.users;
    }

    async findOne(id: number): Promise<User> {
        return UserService.users.find(user => user.id == id)
    }

    async create(user: CreateUserDto): Promise<User> {
        UserService.users.push(user);
        return user;
    }

    async edit(user: CreateUserDto): Promise<User> {
        let index = UserService.users.findIndex(item => item.id == user.id)

        if(index >= 0) {
            UserService.users[index] = user;
        }

        return UserService.users[index];
    }

    async remove(id:number): Promise<boolean> {
        let index = UserService.users.findIndex(item => item.id == id)

        if(index >= 0) {
            UserService.users.splice(index, 1);
        }
        
        return index >= 0;
    }
}
