// DTO data transfer object -промежуточный макет данных для маршрутизации,
// вынесен в отдельный файл для разделения кода на функциональные подмодули
export class CreateSimilarDto {
    similarKinopoiskId: number;
    name: string;
    url: string;
}