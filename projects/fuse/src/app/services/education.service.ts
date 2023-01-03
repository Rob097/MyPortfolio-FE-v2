import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "libs/common-lib/src/lib/config/constants";
import { View } from "libs/common-lib/src/lib/models/criteria.model";
import { Education, EducationQ } from "libs/common-lib/src/lib/models/education.model";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";

const EDUCATIONS_API = Constants.CORE_API + '/educations';

@Injectable()
export class EducationService implements BaseService {

    constructor(private _httpClient: HttpClient){ }

    getById(id: number, view?: string): Observable<any> {
        return this._httpClient.get<Education>(EDUCATIONS_API + `/${id}` + '?view=' + view || View.normal);
    }

    getByCriteria(criteria: EducationQ): Observable<any> {
        return this._httpClient.get<Education>(EDUCATIONS_API + criteria.toString());
    }

}
