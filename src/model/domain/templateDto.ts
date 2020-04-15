export class TemplateDto {
    constructor(
       public id?: number, 
       public uuid?: string, 
       public companyId?: number, 
       public userId?: number, 
       public parentCompanyId?: number,
       public createdAt?: Date,
       public updateAt?: Date
       ) {}
}