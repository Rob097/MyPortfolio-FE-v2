import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { merge } from 'lodash-es';
import { FUSE_APP_CONFIG } from 'libs/fuse-lib/src/lib/services/config/config.constants';

@Injectable({
    providedIn: 'root'
})
export class FuseConfigService
{
    private _config: BehaviorSubject<any>;

    /**
     * Constructor
     */
    constructor(@Inject(FUSE_APP_CONFIG) config: any)
    {
        if(localStorage.getItem('theme')){
            config.theme = localStorage.getItem('theme');
        }
        if(localStorage.getItem('layout')){
            config.layout = localStorage.getItem('layout');
        }
        if(localStorage.getItem('scheme')){
            config.scheme = localStorage.getItem('scheme');
        }

        this._config = new BehaviorSubject(config);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for config
     */
    get config$(): Observable<any>
    {
        return this._config.asObservable();
    }

    set config(value: any)
    {
        // Merge the new config over to the current config
        const config = merge({}, this._config.getValue(), value);

        if(value.theme){
            localStorage.setItem('theme', value.theme);
        }
        if(value.layout){
            localStorage.setItem('layout', value.layout);
        }
        if(value.scheme){
            localStorage.setItem('scheme', value.scheme);
        }

        // Execute the observable
        this._config.next(config);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resets the config to the default
     */
    reset(): void
    {
        // Set the config
        this._config.next(this.config);
    }
}
