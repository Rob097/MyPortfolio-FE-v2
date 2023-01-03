/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'common-lib';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { AuthUtils } from './auth.utils';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticated: boolean = false;

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Forgot password
   *
   * @param email
   */
  forgotPassword(email: string): Observable<any> {
    return this._httpClient.post('api/auth/forgot-password', email);
  }

  /**
   * Reset password
   *
   * @param password
   */
  resetPassword(password: string): Observable<any> {
    return this._httpClient.post('api/auth/reset-password', password);
  }

  /**
   * Sign in
   *
   * @param credentials
   */
  signIn(credentials: { username: string; password: string; rememberMe: boolean }): Observable<any> {
    // Throw error, if the user is already logged in
    if (this._authenticated) {
      throw new Error('User is already logged in.');
    }

    return this._httpClient.post(Constants.AUTH_API + '/signin', credentials).pipe(
      switchMap((response: any) => {
        // Store the access token in the local storage
        this.accessToken = response?.token;

        // Store the user on the user service
        return this._userService.getByEmail(AuthUtils.decodeToken(this.accessToken).sub).pipe(
          switchMap((userResponse: any) => {
            this._userService.user = userResponse.content[0];
            this._authenticated = true;
            return of(response);
          }),
          catchError((error) => {
            throw new Error(error);
          })
        );
      })
    );
  }

  /**
   * Sign in using the access token
   */
  signInUsingToken(): Observable<any> {
    return this._userService.getByEmail(AuthUtils.decodeToken(this.accessToken).sub).pipe(
      switchMap((userResponse: any) => {
        this._userService.user = userResponse.content[0];
        this._authenticated = true;
        return of(true);
      }),
      catchError((error) => {
        throw new Error(error);
      })
    );
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return the observable
    return of(true);
  }

  /**
   * Sign up
   *
   * @param user
   */
  signUp(user: { email: string; password: string; matchingPassword: string; firstName: string; lastName: string }): Observable<any> {
    return this._httpClient.post(Constants.AUTH_API + '/signup', user);
  }

  /**
   * Unlock session
   *
   * @param credentials
   */
  unlockSession(credentials: { email: string; password: string }): Observable<any> {
    return this._httpClient.post('api/auth/unlock-session', credentials);
  }

  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }

    // Check the access token expire date
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }

    // If the access token exists and it didn't expire, sign in using it
    return this.signInUsingToken();
  }

}
