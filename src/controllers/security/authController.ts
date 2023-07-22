import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../../services/authService';
import { Inject, Service } from 'typedi';
import { IAuthService } from '../../services/interfaces/IAuthService';

@Service()
export class AuthController {
    private _authService: IAuthService;

    constructor(@Inject() authService: AuthService) {
        this._authService = authService;
    }

    auth = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { username, password } = req.body;
            const token = await this._authService.auth({ username, password });
            res.status(200).send({ token: token });
        } catch (error) {
            next(error);
        }
    };

    authInterprete = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { username, password } = req.body;
            const token = await this._authService.authInterprete({
                username,
                password,
            });
            res.status(200).send({ token: token });
        } catch (error) {
            next(error);
        }
    };
}
