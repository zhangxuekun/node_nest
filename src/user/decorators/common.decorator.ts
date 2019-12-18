// import {createParamDecorator,SetMetadata } from '@nestjs/common';

// export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// export const Authing = createParamDecorator((data, req) => {
//     return req.authing;
// })

// export const AuthUser = createParamDecorator((data, req) => {
//     let token = req.query.token || null;
    
//     !token && (token = req.body.token);

//     return req.authing.decodeToken(token);
// })