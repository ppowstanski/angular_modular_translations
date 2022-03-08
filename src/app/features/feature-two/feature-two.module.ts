import {NgModule} from '@angular/core';

import {FeatureTwoComponent} from './feature-two.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {I18nHelper} from '@app/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationHelper} from '@app/configuration';
import {CommonModule} from '@app/shared';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FeatureTwoComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: I18nHelper.createTranslateHttpLoader(ConfigurationHelper.FeatureTwo),
        deps: [HttpClient]
      },
      isolate: true
    }),
    RouterModule.forChild([
      {
        path: '',
        component: FeatureTwoComponent
      }
    ])
  ]
})
export class FeatureTwoModule {
  constructor(translateService: TranslateService) {
    I18nHelper.registerTranslateService(translateService);
  }
}
