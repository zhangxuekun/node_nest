import { Controller, Param, Get, Inject, Post, Delete, Put,Res,Body,HttpStatus,ParseIntPipe} from '@nestjs/common';
import { User } from '../interfaces/users.interface';
import { UserService } from '../services/users.service';
import { IUserService } from '../interfaces/users-service.interface';
import { ApiException } from '../../common/exceptions/api.exception';
import { ApiErrorCode } from '../../common/enums/api-error-code.enum';
import {UserIdPipe} from '../pipes/user-id.pipe'
import { CreateUserDto } from '../dtos/create-user.dto';

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
        // if(isNaN(id) || typeof id !== 'number' || id <= 0) {
        //     return res.status(HttpStatus.BAD_REQUEST).send({
        //         errorCode: 10001,
        //         errorMessage: '用户编号错误'
        //     });
        // }
        if(isNaN(id) || typeof id !== 'number' || id <= 0) {
           throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
        }

        return res.status(HttpStatus.OK).send({
            errorCode: 0,
            errorMessage: '请求成功',
            data: await this.userService.findOne(id)
        });
    }


    @Get('find1/:id')
    async findOne1(@Param('id', new ParseIntPipe()) id): Promise<User> {
        return await this.userService.findOne(id);
    }

    @Get('find2/:id')
    async findOne2(@Param('id', new UserIdPipe()) id): Promise<User> {
        return await this.userService.findOne(id);
    }


    @Post()
    async create(@Body() user: CreateUserDto): Promise<User> {

        return await this.userService.create(user);
    }

    @Put()
    async edit(@Body() user: CreateUserDto): Promise<User> {

        return await this.userService.edit(user);
    }

    @Delete(':id')
    async remove(@Param('id', new UserIdPipe()) id): Promise<boolean> {

        return await this.userService.remove(id);
    }
}