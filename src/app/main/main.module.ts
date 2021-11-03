import {NgModule, Optional, SkipSelf} from '@angular/core';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {I18nHelper} from '@app/core';
import {ConfigurationHelper} from '@app/configuration';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@app/shared';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: I18nHelper.createTranslateHttpLoader(ConfigurationHelper.MainModule),
        deps: [HttpClient]
      },
      isolate: true
    }),
    FormsModule
  ]
})
export class MainModule {
  constructor(@Optional() @SkipSelf() parentModule: MainModule, translateService: TranslateService) {
    if (!!parentModule) {
      throw new Error('MainModule is already loaded. Please import it only in AppModule');
    }
    I18nHelper.registerTranslateService(translateService);
  }
}
