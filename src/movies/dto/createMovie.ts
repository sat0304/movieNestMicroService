// DTO data transfer object -промежуточный макет данных для маршрутизации,
// вынесен в отдельный файл для разделения кода на функциональные подмодули
export class CreateMovieDto {
    name: string;
    year: number;
    kinopoiskId: number;
}