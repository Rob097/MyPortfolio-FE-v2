import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'projects/fuse/src/environments/environment';
import { AppModule } from 'projects/fuse/src/app/app.module';

if ( environment.production )
{
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
                        .catch(err => console.error(err));
