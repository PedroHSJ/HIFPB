import { compare } from 'bcrypt';
import { Auth } from '../entities/security/Auth';
import {
    ApiError,
    BadResquestError,
    NotFoundError,
} from '../helpers/api-erros';
import { UsuarioService } from './usuarioService';
import { sign } from 'jsonwebtoken';

import 'dotenv/config';
import { IAuthService } from './interfaces/IAuthService';
import { Service } from 'typedi';
import { IUsuarioService } from './interfaces/IUsuarioService';
import { IInterpreteService } from './interfaces/IInterpreteService';
import { InterpreteService } from './interpreteService';
@Service()
export class AuthService implements IAuthService {
    private _usuarioService: IUsuarioService;
    private _interpreteService: IInterpreteService;

    constructor(
        usuarioService: UsuarioService,
        interpreteService: InterpreteService
    ) {
        this._usuarioService = usuarioService;
        this._interpreteService = interpreteService;
    }
    authInterprete = async (auth: Auth): Promise<string> => {
        const interpreteExiste = await this._interpreteService.getByUsername(
            auth.username
        );

        if (!interpreteExiste) throw new ApiError(400, 'Dados inválidos');
        if (!interpreteExiste.password)
            throw new BadResquestError('Senha não cadastrada');
        const senhaValida = await compare(
            auth.password,
            interpreteExiste.password
        );
        if (!senhaValida) throw new ApiError(400, 'Dados inválidos');
        const secretKey = process.env.SECRET_KEY;
        if (!secretKey) throw new ApiError(500, 'Chave não informada');
        const token = sign({ id: interpreteExiste.id }, secretKey, {
            expiresIn: '7d',
        });
        return token;
    };

    auth = async (auth: Auth): Promise<string> => {
        const usuarioExiste = await this._usuarioService.getByUsername(
            auth.username
        );
        if (!usuarioExiste) throw new ApiError(400, 'Dados inválidos');
        if (!usuarioExiste.password)
            throw new BadResquestError('Senha não cadastrada');
        const senhaValida = await compare(
            auth.password,
            usuarioExiste.password
        );
        if (!senhaValida) throw new ApiError(400, 'Dados inválidos');
        const secretKey = process.env.SECRET_KEY;
        if (!secretKey) throw new ApiError(500, 'Chave não informada');
        const token = sign({ id: usuarioExiste.id }, secretKey, {
            expiresIn: '7d',
        });
        return token;
    };
}
