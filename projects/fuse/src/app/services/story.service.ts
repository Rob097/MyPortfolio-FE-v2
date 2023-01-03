import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "libs/common-lib/src/lib/config/constants";
import { View } from "libs/common-lib/src/lib/models/criteria.model";
import { Story, StoryQ } from "libs/common-lib/src/lib/models/story.model";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";

const STORIES_API = Constants.CORE_API + '/stories';

@Injectable()
export class StoryService implements BaseService {

    constructor(private _httpClient: HttpClient){ }

    getById(id: number, view?: string): Observable<any> {
        return this._httpClient.get<Story>(STORIES_API + `/${id}` + '?view=' + (view ? view : View.normal));
    }

    getByCriteria(criteria: StoryQ): Observable<any> {
        return this._httpClient.get<Story>(STORIES_API + criteria.toString());
    }

}
