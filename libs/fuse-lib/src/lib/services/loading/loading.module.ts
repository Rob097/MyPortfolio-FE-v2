import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FuseLoadingInterceptor } from 'libs/fuse-lib/src/lib/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: FuseLoadingInterceptor,
            multi   : true
        }
    ]
})
export class FuseLoadingModule
{
}
