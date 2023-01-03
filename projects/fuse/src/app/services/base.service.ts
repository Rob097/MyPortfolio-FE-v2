import { Filters } from "libs/common-lib/src/lib/models/criteria.model";
import { Observable } from "rxjs";

export interface BaseService {
    getById(id: number, view?: string): Observable<any>;
    getByCriteria(criteria: Filters): Observable<any>;
}
