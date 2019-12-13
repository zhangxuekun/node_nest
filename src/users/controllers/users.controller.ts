import { Controller, Param, Get, Inject, Post, Delete, Put,Res,HttpStatus} from '@nestjs/common';
import { User } from '../interfaces/users.interface';
import { UserService } from '../services/users.service';
import { IUserService } from '../interfaces/users-service.interface';

@Controller('users')
export class UserController {

    constructor(@Inject('UserService') private readonly userService: IUserService) {

    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Res() res, @Param() params): Promise<User> {
        let id = parseInt(params.id);
        if(isNaN(id) || typeof id !== 'number' || id <= 0) {
            return res.status(HttpStatus.BAD_REQUEST).send({
                errorCode: 10001,
                errorMessage: '用户编号错误'
            });
        }
        
        return res.status(HttpStatus.OK).send({
            errorCode: 0,
            errorMessage: '请求成功',
            data: await this.userService.findOne(id)
        });
    }

    // @Post()
    // async create() {
    //     return await this.userService.create();
    // }

    // @Put()
    // async edit() {
    //     return await this.userService.edit();
    // }

    // @Delete()
    // async remove() {
    //     return await this.userService.remove();
    // }
}