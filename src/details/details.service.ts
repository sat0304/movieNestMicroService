import { Injectable } from '@nestjs/common';
import { Detail } from './details.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDetailDto } from './dto/createDetailDto';

@Injectable()
export class DetailsService {
    constructor(@InjectModel(Detail) private detailRepo: typeof Detail) {}

    async createDetail(dto: CreateDetailDto) {
        const detail = await this.detailRepo.create(dto);
        return detail;
    }

    async getDetailByName( name: any ) {
        const detailName = await this.detailRepo.findOne({where:{name}});
        return detailName;
    }

    async getAllDetails() {
        const details = await this.detailRepo.findAll();
        // const details = await this.detailRepo.findAll({include: { all: true}});
        return details;

    }
}
