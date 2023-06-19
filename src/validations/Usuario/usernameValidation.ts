import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { UsuarioService } from "../../services/usuarioService";
@ValidatorConstraint({ async: false })
export class UsernameValidation implements ValidatorConstraintInterface {
  async validate(
    value: string,
    validationArguments?: ValidationArguments | undefined
  ): Promise<boolean> {
    const userNameExists =
      await new UsuarioService().getByUsernameUsuarioService(value);
    if (userNameExists) return false;
    return true;
  }
  defaultMessage?(
    validationArguments?: ValidationArguments | undefined
  ): string {
    throw new Error("Method not implemented.");
  }
}
