import { Company } from '../domain/company';
export class GetCompaniesResponse {
    constructor(public companies?: Company[]){}
}
