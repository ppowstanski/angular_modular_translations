import {TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TranslationLoaderHelper} from './translation-loader.helper';

export class TranslationLoaderService extends TranslateLoader {

  constructor(private http: HttpClient, private moduleName: string) {
    super();
  }

  getTranslation(lang: string): Observable<Record<string, string>> {
    return forkJoin([
      this.http.get<Record<string, string>>(TranslationLoaderHelper.createModuleI18nPath(this.moduleName, lang)),
      this.http.get<Record<string, string>>(TranslationLoaderHelper.createCommonI18nPath(lang))
    ]).pipe(
      map(([moduleTranslation, commonTranslation]) => Object.assign(
        {},
        commonTranslation,
        moduleTranslation
      ))
    );
  }
}
