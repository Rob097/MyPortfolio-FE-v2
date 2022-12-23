import { NgModule } from '@angular/core';
import { LayoutComponent } from 'projects/fuse/src/app/layout/layout.component';
import { EmptyLayoutModule } from 'projects/fuse/src/app/layout/layouts/empty/empty.module';
import { CenteredLayoutModule } from 'projects/fuse/src/app/layout/layouts/horizontal/centered/centered.module';
import { EnterpriseLayoutModule } from 'projects/fuse/src/app/layout/layouts/horizontal/enterprise/enterprise.module';
import { MaterialLayoutModule } from 'projects/fuse/src/app/layout/layouts/horizontal/material/material.module';
import { ModernLayoutModule } from 'projects/fuse/src/app/layout/layouts/horizontal/modern/modern.module';
import { ClassicLayoutModule } from 'projects/fuse/src/app/layout/layouts/vertical/classic/classic.module';
import { ClassyLayoutModule } from 'projects/fuse/src/app/layout/layouts/vertical/classy/classy.module';
import { CompactLayoutModule } from 'projects/fuse/src/app/layout/layouts/vertical/compact/compact.module';
import { DenseLayoutModule } from 'projects/fuse/src/app/layout/layouts/vertical/dense/dense.module';
import { FuturisticLayoutModule } from 'projects/fuse/src/app/layout/layouts/vertical/futuristic/futuristic.module';
import { ThinLayoutModule } from 'projects/fuse/src/app/layout/layouts/vertical/thin/thin.module';
import { SettingsModule } from 'projects/fuse/src/app/layout/common/settings/settings.module';
import { SharedModule } from 'libs/common-lib/src/lib/shared.module';

const layoutModules = [
    // Empty
    EmptyLayoutModule,

    // Horizontal navigation
    CenteredLayoutModule,
    EnterpriseLayoutModule,
    MaterialLayoutModule,
    ModernLayoutModule,

    // Vertical navigation
    ClassicLayoutModule,
    ClassyLayoutModule,
    CompactLayoutModule,
    DenseLayoutModule,
    FuturisticLayoutModule,
    ThinLayoutModule
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        SharedModule,
        SettingsModule,
        ...layoutModules
    ],
    exports     : [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule
{
}
