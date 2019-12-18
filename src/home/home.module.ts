import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ViewInterceptor } from '../common/interceptors/view.interceptor';
import { HomeController } from './controllers/home.controller';

@Module({
  controllers: [HomeController],
  providers: [],
})

export class HomeModule {}