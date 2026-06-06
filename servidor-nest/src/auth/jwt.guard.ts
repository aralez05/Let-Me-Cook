import {

  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException

} from '@nestjs/common';

import * as jwt from 'jsonwebtoken';

@Injectable()

export class JwtGuard
implements CanActivate {

  canActivate(
    context: ExecutionContext
  ): boolean {

    const request =
    context.switchToHttp()
    .getRequest();

    const authHeader =
    request.headers.authorization;

    if (!authHeader) {

      throw new UnauthorizedException(
        'Token requerido'
      );

    }

    const token =
    authHeader.split(' ')[1];

    try {

      const payload =
      jwt.verify(

        token,

        'secreto123'

      );

      request.usuario = payload;

      return true;

    }

    catch {

      throw new UnauthorizedException(
        'Token inválido'
      );

    }

  }

}