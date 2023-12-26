import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    const resp = context.switchToHttp().getResponse();
    if (req) {
      const method = req.method;
      const url = req.url;
      return next
        .handle()
        .pipe(
          tap(() =>
            Logger.log(
              `${method} ${url} - statusCode ${resp.statusCode} - ${Date.now() - now
              }ms`,
              context.getClass().name,
            ),
          ),
        );
    }
  }
}
