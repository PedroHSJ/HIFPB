import { DataSource, DataSourceOptions } from "typeorm";
import { Seeder, SeederFactoryManager, runSeeder } from "typeorm-extension";
import { UsuarioSeeder } from "./usuarioSeeder";
import { RoleSeeder } from "./roleSeeder";
import { DiasDaSemanaSeeder } from "./diasDaSemanaSeeder";

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager) {
    await runSeeder(dataSource, RoleSeeder);
    await runSeeder(dataSource, UsuarioSeeder);
    await runSeeder(dataSource, DiasDaSemanaSeeder);
  }
}
