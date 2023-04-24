// DTO data transfer object -промежуточный макет данных для маршрутизации,
// вынесен в отдельный файл для разделения кода на функциональные подмодули
export class CreateDto {
    readonly nameMovie: string;
    readonly description: string;
}