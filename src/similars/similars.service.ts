import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Similar } from './similars.model';
import { CreateSimilarDto } from './dto/createSimilarDto';

@Injectable()
export class SimilarsService {
    constructor(@InjectModel(Similar) 
    private similarRepo: typeof Similar) {}

async createSimilar(dto: CreateSimilarDto) {
    const similar = await this.similarRepo.create(dto);
    return similar;
  }

async getSimilarByKinopoiskId( similarKinopoiskId: number ) {
    const similar = await this.similarRepo.findOne({where: { similarKinopoiskId }});
    return similar;
  }

async getAllSimilars() {
    const similars = await this.similarRepo.findAll();
    // const similars = await this.similarRepo.findAll({include: { all: true}});
    return similars;
  }
}
