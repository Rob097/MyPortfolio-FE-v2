/* eslint-disable @typescript-eslint/naming-convention */
import { isDevMode } from '@angular/core';


export class Constants {

    public static DOMAIN: string = (this.isInDevMode()) ? 'https://myportfolio-backend.it' : 'http://localhost:8083';
    public static AUTH_API = this.DOMAIN + '/api/auth';
    public static CORE_API = this.DOMAIN + '/api/core';

    // Function used to check if we are in production.
    // Wait 2 seconds in order to let enableProduction to be called.
    static async isInDevMode(): Promise<boolean> {
        return new Promise(() => {
          setTimeout(() => {
            isDevMode();
          }, 2000);
        });
    }

}

