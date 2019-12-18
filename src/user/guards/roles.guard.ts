import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector
    ) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        const request = context.switchToHttp().getRequest();       

        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        if (roles && roles.length > 0) {

            // 需要校验用户权限
            if(roles.some(item =>  'user' == item)) {
                
                return request.query.token || request.body.token;
                
            }

        }

        return true;
    }
}