import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { static as resource } from 'express';
import * as art from 'express-art-template';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';

import { RolesGuard } from './user/guards/roles.guard';


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

   

    // app.use(Authing({
    //   clientId: 'xxxxxx',
    //   secret: 'xxxxx'
    // }));

    app.useStaticAssets('public',{
        prefix:'/public/'
      })
    
      //配置模板引擎,需要先安装模板引擎
      // app.setBaseViewsDir(join(__dirname,'..','views'))
      app.setBaseViewsDir('views');
      app.setViewEngine('ejs');
    
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new ApiParamsValidationPipe());

    await app.listen(3000);
}
bootstrap();
