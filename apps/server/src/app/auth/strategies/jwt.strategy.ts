import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'W5T83i+f6IgbsPqL5zM7YYX+pMNkgSbx/O19NR4gJhI=',
    });
  }

  async validate(payload: any) {
    return { _id: payload.sub, username: payload.username };
  }
}
