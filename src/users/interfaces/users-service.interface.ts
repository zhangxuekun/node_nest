import { User } from './users.interface';
export interface IUserService { 
   findAll(): Promise<User[]>;
   findOne(id: number): Promise<User>;
   // create();
   // edit();
   // remove();
}