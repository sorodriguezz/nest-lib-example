import { Module } from '@nestjs/common';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
  ],

})
export class CoreModule {}
