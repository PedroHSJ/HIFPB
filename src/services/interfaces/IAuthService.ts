import { Auth } from '../../entities/security/Auth';

export interface IAuthService {
    auth: (auth: Auth) => Promise<string>;
    authInterprete: (auth: Auth) => Promise<string>;
}
