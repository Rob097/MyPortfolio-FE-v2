import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "libs/common-lib/src/lib/config/constants";
import { View } from "libs/common-lib/src/lib/models/criteria.model";
import { Experience, ExperienceQ } from "libs/common-lib/src/lib/models/experience.model";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";

const EXPERIENCES_API = Constants.CORE_API + '/experiences';

@Injectable()
export class ExperienceService implements BaseService {

    constructor(private _httpClient: HttpClient){ }

    getById(id: number, view?: string): Observable<any> {
        return this._httpClient.get<Experience>(EXPERIENCES_API + `/${id}` + '?view=' + view || View.normal);
    }

    getByCriteria(criteria: ExperienceQ): Observable<any> {
        return this._httpClient.get<Experience>(EXPERIENCES_API + criteria.toString());
    }

}
