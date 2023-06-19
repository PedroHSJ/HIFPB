import { compare } from "bcrypt";
import { Auth } from "../entities/security/Auth";
import { ApiError, BadResquestError, NotFoundError } from "../helpers/api-erros";
import { UsuarioService } from "./usuarioService";
import { sign } from "jsonwebtoken";

import "dotenv/config";

const authService = async (auth: Auth) => {
  const usuarioExiste = await new UsuarioService().getByUsernameUsuarioService(
    auth.username
  );
  if (!usuarioExiste) throw new ApiError(400, "Dados inválidos");
  if(!usuarioExiste.password) throw new BadResquestError("Senha não cadastrada");
  const senhaValida = compare(auth.password, usuarioExiste.password);
  if (!senhaValida) throw new ApiError(400, "Dados inválidos");
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) throw new ApiError(500, "Chave não informada");
  const token = sign({ id: usuarioExiste.id }, secretKey, {
    expiresIn: "7d",
  });
  return token;
};

export { authService };
