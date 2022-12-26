import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { User } from 'libs/auth-lib/src/lib/user/user.types';
import { Constants } from 'libs/common-lib/src/lib/config/constants';


const USERS_API = Constants.CORE_API + '/users';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    get user$(): Observable<User>
    {
        return this._user.asObservable();
    }
    set user(value: User)
    {
        // Store the value
        this._user.next(value);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(id: number): Observable<any> {
        return this._httpClient.get<User>(USERS_API + `/${id}` + '?view=synthetic');
    }

    getByEmail(email: string): Observable<any> {
        return this._httpClient.get<User>(USERS_API + '?filters=email:' + email + '&view=synthetic');
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any>
    {
        return this._httpClient.patch<User>('api/common/user', {user}).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }
}
