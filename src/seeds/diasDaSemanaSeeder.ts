import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DiaDaSemana } from "../entities/DiaDaSemana";

export class DiasDaSemanaSeeder implements Seeder {
    async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
      ): Promise<void> {
        const diasDaSemanaRepo = dataSource.getRepository(DiaDaSemana);
        const segunda = await diasDaSemanaRepo.findOne({ where: { nome: "Segunda" } });
        if (!segunda) {
            await diasDaSemanaRepo.save({ nome: "Segunda" });
        }
        const terca = await diasDaSemanaRepo.findOne({ where: { nome: "Terça" } });
        if (!terca) {
            await diasDaSemanaRepo.save({ nome: "Terça" });
        }
        const quarta = await diasDaSemanaRepo.findOne({ where: { nome: "Quarta" } });
        if (!quarta) {
            await diasDaSemanaRepo.save({ nome: "Quarta" });
        }
        const quinta = await diasDaSemanaRepo.findOne({ where: { nome: "Quinta" } });
        if (!quinta) {
            await diasDaSemanaRepo.save({ nome: "Quinta" });
        }
        const sexta = await diasDaSemanaRepo.findOne({ where: { nome: "Sexta" } });
        if (!sexta) {
            await diasDaSemanaRepo.save({ nome: "Sexta" });
        }
        const sabado = await diasDaSemanaRepo.findOne({ where: { nome: "Sábado" } });
        if (!sabado) {
            await diasDaSemanaRepo.save({ nome: "Sábado" });
        }
        const domingo = await diasDaSemanaRepo.findOne({ where: { nome: "Domingo" } });
        if (!domingo) {
            await diasDaSemanaRepo.save({ nome: "Domingo" });
        }

      }
}
