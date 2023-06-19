import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export class RoleSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const roleRepo = dataSource.getRepository("Role");
    const role = await roleRepo.findOne({ where: { nome: "admin" } });
    if (!role) {
      await roleRepo.save({ nome: "admin" });
    }
  }
}
