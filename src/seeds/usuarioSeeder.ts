import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Usuario } from "../entities/Usuario";
import { Role } from "../entities/Role";
import { hash } from "bcrypt";

export class UsuarioSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const roleRepo = dataSource.getRepository("Role");
    const role = (await roleRepo.findOne({ where: { nome: "admin" } })) as Role;
    if (role) {
      const usuarioPadrao = {
        username: "admin",
        password: await hash("admin", 10),
        email: "admin@admin.com",
        roles: [role],
      };

      const usuarioRepo = dataSource.getRepository("Usuario");
      const usuario = await usuarioRepo.findOne({
        where: { username: "admin" },
      });
      if (!usuario) {
        await usuarioRepo.save(usuarioPadrao);
      }
    }
  }
}
