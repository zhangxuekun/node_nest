import { User } from './user.interface';
import{CreateUserDto} from '../dtos/create-user.dto'
export interface IUserService { 
   findAll(): Promise<User[]>;
   findOne(id: number): Promise<User>;
   create(user: CreateUserDto): Promise<User>;
   edit(user: CreateUserDto): Promise<User>;
   remove(id: number): Promise<boolean>;
}