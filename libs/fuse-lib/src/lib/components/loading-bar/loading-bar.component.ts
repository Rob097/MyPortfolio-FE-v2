import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { FuseLoadingService } from 'libs/fuse-lib/src/lib/services/loading';

@Component({
    selector     : 'fuse-loading-bar',
    templateUrl  : './loading-bar.component.html',
    styleUrls    : ['./loading-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'fuseLoadingBar'
})
export class FuseLoadingBarComponent implements OnChanges, AfterViewInit, OnDestroy
{
    @Input() autoMode: boolean = true;
    mode: 'determinate' | 'indeterminate';
    progress: number = 0;
    show: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _fuseLoadingService: FuseLoadingService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Auto mode
        if ( 'autoMode' in changes )
        {
            // Set the auto mode in the service
            this._fuseLoadingService.setAutoMode(coerceBooleanProperty(changes.autoMode.currentValue));
        }
    }

    /**
     * On init
     */
    ngAfterViewInit(): void
    {
        setTimeout(() => {
            // Subscribe to the service
            this._fuseLoadingService.mode$
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((value) => {
                    this.mode = value;
                });

            this._fuseLoadingService.progress$
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((value) => {
                    this.progress = value;
                });

            this._fuseLoadingService.show$
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((value) => {
                    this.show = value;
                });
        }, 0);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
