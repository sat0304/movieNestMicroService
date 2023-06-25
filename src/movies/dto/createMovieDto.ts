// DTO data transfer object -промежуточный макет данных для маршрутизации,
// вынесен в отдельный файл для разделения кода на функциональные подмодули
export class CreateMovieDto {
    kinopoiskId: number;
    movieName: string;
    originalName: string;
    description: string;
    poster: string;
    trailerLink: string;
    year: number;
    movieLength: string;
    ageRating: string;
    rate: number;
}