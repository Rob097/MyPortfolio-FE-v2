import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "libs/common-lib/src/lib/config/constants";
import { View } from "libs/common-lib/src/lib/models/criteria.model";
import { Skill, SkillQ } from "libs/common-lib/src/lib/models/skill.model";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";

const SKILLS_API = Constants.CORE_API + '/skills';

@Injectable()
export class SkillService implements BaseService {

    constructor(private _httpClient: HttpClient){ }

    getById(id: number, view?: string): Observable<any> {
        return this._httpClient.get<Skill>(SKILLS_API + `/${id}` + '?view=' + view || View.normal);
    }

    getByCriteria(criteria: SkillQ): Observable<any> {
        return this._httpClient.get<Skill>(SKILLS_API + criteria.toString());
    }

}
