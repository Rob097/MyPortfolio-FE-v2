import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseFullscreenModule } from 'libs/fuse-lib/src/lib/components/fullscreen';
import { FuseLoadingBarModule } from 'libs/fuse-lib/src/lib/components/loading-bar';
import { FuseNavigationModule } from 'libs/fuse-lib/src/lib/components/navigation';
import { LanguagesModule } from 'projects/fuse/src/app/layout/common/languages/languages.module';
import { MessagesModule } from 'projects/fuse/src/app/layout/common/messages/messages.module';
import { NotificationsModule } from 'projects/fuse/src/app/layout/common/notifications/notifications.module';
import { SearchModule } from 'projects/fuse/src/app/layout/common/search/search.module';
import { ShortcutsModule } from 'projects/fuse/src/app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'projects/fuse/src/app/layout/common/user/user.module';
import { SharedModule } from 'projects/fuse/src/app/shared/shared.module';
import { CenteredLayoutComponent } from 'projects/fuse/src/app/layout/layouts/horizontal/centered/centered.component';

@NgModule({
    declarations: [
        CenteredLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseFullscreenModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        LanguagesModule,
        MessagesModule,
        NotificationsModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule
    ],
    exports     : [
        CenteredLayoutComponent
    ]
})
export class CenteredLayoutModule
{
}
