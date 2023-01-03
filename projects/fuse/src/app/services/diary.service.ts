import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "libs/common-lib/src/lib/config/constants";
import { View } from "libs/common-lib/src/lib/models/criteria.model";
import { Diary, DiaryQ } from "libs/common-lib/src/lib/models/diary.model";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";

const DIARIES_API = Constants.CORE_API + '/diaries';

@Injectable()
export class DiaryService implements BaseService {

    constructor(private _httpClient: HttpClient){ }

    getById(id: number, view?: string): Observable<any> {
        return this._httpClient.get<Diary>(DIARIES_API + `/${id}` + '?view=' + view || View.normal);
    }

    getByCriteria(criteria: DiaryQ): Observable<any> {
        return this._httpClient.get<Diary>(DIARIES_API + criteria.toString());
    }

}
