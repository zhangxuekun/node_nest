import { Module,DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'
import { HomeModule } from './home/home.module'
import { ConfigService } from './config/config.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Path from 'path';

@Module({
  imports: [HomeModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
