import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from 'libs/fuse-lib/src/lib/lib/mock-api';
import { finance as financeData } from 'projects/fuse/src/app/mock-api/dashboards/finance/data';

@Injectable({
    providedIn: 'root'
})
export class FinanceMockApi
{
    private _finance: any = financeData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/dashboards/finance')
            .reply(() => [200, cloneDeep(this._finance)]);
    }
}
