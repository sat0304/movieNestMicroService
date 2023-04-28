import { Injectable } from '@nestjs/common';

@Injectable()
export class GenresService {
    getGenres() {
        return {enName: "Comedy", description: "Комедия"};
    }
}
