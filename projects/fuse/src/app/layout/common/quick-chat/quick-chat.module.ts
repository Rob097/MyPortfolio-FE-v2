import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseDrawerModule } from 'libs/fuse-lib/src/lib/components/drawer';
import { FuseScrollbarModule } from 'libs/fuse-lib/src/lib/directives/scrollbar';
import { SharedModule } from 'projects/fuse/src/app/shared/shared.module';
import { QuickChatComponent } from 'projects/fuse/src/app/layout/common/quick-chat/quick-chat.component';

@NgModule({
    declarations: [
        QuickChatComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseDrawerModule,
        FuseScrollbarModule,
        SharedModule
    ],
    exports     : [
        QuickChatComponent
    ]
})
export class QuickChatModule
{
}
