import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "libs/common-lib/src/lib/config/constants";
import { View } from "libs/common-lib/src/lib/models/criteria.model";
import { User, UserQ } from "libs/common-lib/src/lib/models/user.model";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";

const USERS_API = Constants.CORE_API + '/users';

@Injectable()
export class UserService implements BaseService {

    constructor(private _httpClient: HttpClient){ }

    getById(id: number, view?: string): Observable<any> {
        return this._httpClient.get<User>(USERS_API + `/${id}` + '?view=' + view || View.normal);
    }

    getByCriteria(criteria: UserQ): Observable<any> {
        return this._httpClient.get<User>(USERS_API + criteria.toString());
    }

}
