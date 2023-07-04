import { Auth } from "../../entities/security/Auth";

export interface IAuthService {
    auth: (auth: Auth) => Promise<string>;
}