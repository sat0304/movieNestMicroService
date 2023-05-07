// DTO data transfer object -промежуточный макет данных для маршрутизации,
// вынесен в отдельный файл для разделения кода на функциональные подмодули
export class CreatePersonDto {
    kinopoiskId: number;
    name: string;
    // nameEng: string;
    profession: string;
    professions: any[];
    link: string;
}