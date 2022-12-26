import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'libs/auth-lib/src/lib/user/user.service';
import { User } from 'libs/auth-lib/src/lib/user/user.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit, OnDestroy
{

    user: User;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _userService: UserService)
    {
    }

    ngOnInit(): void {
        // Subscribe to the user service
        this._userService.user$
            .pipe((takeUntil(this._unsubscribeAll)))
            .subscribe((user: User) => {
                this.user = user;
            });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

}
