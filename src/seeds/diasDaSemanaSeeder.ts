import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DiaDaSemana } from '../entities/DiaDaSemana';
import { DiasDaSemanaEnum } from '../enums/DiasDaSemana';

export class DiasDaSemanaSeeder implements Seeder {
    async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<void> {
        const diasDaSemanaRepo = dataSource.getRepository(DiaDaSemana);
        const segunda = await diasDaSemanaRepo.findOne({
            where: { dia: DiasDaSemanaEnum.SEGUNDA },
        });
        if (!segunda) {
            await diasDaSemanaRepo.save({ dia: DiasDaSemanaEnum.SEGUNDA });
        }
        const terca = await diasDaSemanaRepo.findOne({
            where: { dia: DiasDaSemanaEnum.TERCA },
        });
        if (!terca) {
            await diasDaSemanaRepo.save({ dia: DiasDaSemanaEnum.TERCA });
        }
        const quarta = await diasDaSemanaRepo.findOne({
            where: { dia: DiasDaSemanaEnum.QUARTA },
        });
        if (!quarta) {
            await diasDaSemanaRepo.save({ dia: DiasDaSemanaEnum.QUARTA });
        }
        const quinta = await diasDaSemanaRepo.findOne({
            where: { dia: DiasDaSemanaEnum.QUINTA },
        });
        if (!quinta) {
            await diasDaSemanaRepo.save({ dia: DiasDaSemanaEnum.QUINTA });
        }
        const sexta = await diasDaSemanaRepo.findOne({
            where: { dia: DiasDaSemanaEnum.SEXTA },
        });
        if (!sexta) {
            await diasDaSemanaRepo.save({ dia: DiasDaSemanaEnum.SEXTA });
        }
        const sabado = await diasDaSemanaRepo.findOne({
            where: { dia: DiasDaSemanaEnum.SABADO },
        });
        if (!sabado) {
            await diasDaSemanaRepo.save({ dia: DiasDaSemanaEnum.SABADO });
        }
        const domingo = await diasDaSemanaRepo.findOne({
            where: { dia: DiasDaSemanaEnum.DOMINGO },
        });
        if (!domingo) {
            await diasDaSemanaRepo.save({ dia: DiasDaSemanaEnum.DOMINGO });
        }
    }
}
