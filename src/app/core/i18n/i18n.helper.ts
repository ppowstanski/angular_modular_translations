import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslationLoaderService} from './translation-loader.service';
import {TranslateService} from '@ngx-translate/core';

export enum AppLanguage {
  En = 'en',
  Fr = 'fr'
}

@Injectable({
  providedIn: 'root'
})
export class I18nHelper {
  private static translateServices: TranslateService[] = [];

  static registerTranslateService(translateService: TranslateService): void {
    I18nHelper.translateServices.push(translateService);
    I18nHelper.init(translateService);
  }

  static createTranslateHttpLoader(modulePath: string) {
    return (httpClient: HttpClient) => {
      return new TranslationLoaderService(httpClient, modulePath);
    };
  }

  static changeLanguage(language: AppLanguage) {
    I18nHelper.translateServices.forEach(translateService => {
      translateService.use(language);
      translateService.setDefaultLang(language);
    });
  }

  private static init(translateService: TranslateService): void {
    translateService.addLangs([AppLanguage.En.toString(), AppLanguage.Fr.toString()]);
    translateService.setDefaultLang(AppLanguage.En.toString());
    translateService.use(I18nHelper.getLanguage(translateService));
  }

  private static getLanguage(translateService: TranslateService): string {
    const browserLang = translateService.getBrowserLang() || ''
    return browserLang.match(/en|fr/) ? browserLang : AppLanguage.En.toString();
  }
}
