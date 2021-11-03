import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigurationHelper} from '@app/configuration';

const routes: Routes = [
  {
    path: ConfigurationHelper.FeatureOne,
    loadChildren: () => import('../features/feature-one/feature-one.module').then((m) => m.FeatureOneModule)
  },
  {
    path: ConfigurationHelper.FeatureTwo,
    loadChildren: () => import('../features/feature-two/feature-two.module').then((m) => m.FeatureTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
