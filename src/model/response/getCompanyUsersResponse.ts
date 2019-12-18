import { CompanyExtended } from '../domain/company';
export class GetCompanyUsersResponse {
    // Returns a list of companies with their users
    constructor(public company?: CompanyExtended[]){}
}
