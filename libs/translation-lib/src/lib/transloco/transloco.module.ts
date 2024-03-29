import { Translation, TRANSLOCO_CONFIG, TRANSLOCO_LOADER, translocoConfig, TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco.http-loader';
import { isDevMode } from '@angular/core';
import { firstValueFrom } from 'rxjs';

// Function used to check if we are in production.
// Wait 2 seconds in order to let enableProduction to be called.
export class ProdCheckComponent {
    static async isInDevMode(): Promise<boolean> {
      return new Promise(() => {
        setTimeout(() => {
            isDevMode();
        }, 2000);
      });
    }
}

@NgModule({
    exports  : [
        TranslocoModule
    ],
    imports: [
        HttpClientModule
    ],
    providers: [
        {
            // Provide the default Transloco configuration
            provide : TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs      : [
                    {
                        id   : 'en',
                        label: 'English'
                    },
                    {
                        id   : 'it',
                        label: 'Italiano'
                    }
                ],
                defaultLang         : 'en',
                fallbackLang        : 'en',
                reRenderOnLangChange: true,
                prodMode            : !ProdCheckComponent.isInDevMode()
            })
        },
        {
            // Provide the default Transloco loader
            provide : TRANSLOCO_LOADER,
            useClass: TranslocoHttpLoader
        },
        {
            // Preload the default language before the app starts to prevent empty/jumping content
            provide   : APP_INITIALIZER,
            deps      : [TranslocoService],
            useFactory: (translocoService: TranslocoService): any => (): Promise<Translation> => {
                const defaultLang = translocoService.getDefaultLang();
                translocoService.setActiveLang(defaultLang);
                return firstValueFrom(translocoService.load(defaultLang));
            },
            multi     : true
        }
    ]
})
export class TranslocoCoreModule
{
}
