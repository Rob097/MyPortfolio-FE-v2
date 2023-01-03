import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { TranslocoCoreModule } from 'libs/translation-lib/src/lib/transloco/transloco.module';
import { IconsModule } from 'libs/common-lib/src/lib/icons/icons.module';
import { FuseModule } from 'libs/fuse-lib/src/lib/fuse.module';
import { FuseConfigModule } from 'libs/fuse-lib/src/lib/services/config/config.module';
import { appConfig } from 'libs/common-lib/src/lib/config/app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    TranslocoCoreModule,
    IconsModule,

    // Fuse, FuseConfig & FuseMockAPI
    FuseModule,
    FuseConfigModule.forRoot(appConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
