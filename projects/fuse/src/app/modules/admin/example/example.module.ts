import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ExampleComponent } from 'projects/fuse/src/app/modules/admin/example/example.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        CommonModule,
        RouterModule.forChild(exampleRoutes),
        TranslocoModule
    ]
})
export class ExampleModule
{
}
