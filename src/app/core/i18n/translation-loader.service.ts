import {Injectable} from '@angular/core';
import {TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TranslationLoaderHelper} from './translation-loader.helper';

export class TranslationLoaderService extends TranslateLoader {

  constructor(private http: HttpClient, private moduleName: string) {
    super();
  }

  getTranslation(lang: string): Observable<any> {
    return forkJoin({
      moduleTranslation: this.http.get(TranslationLoaderHelper.createModuleI18nPath(this.moduleName, lang)),
      commonTranslation: this.http.get(TranslationLoaderHelper.createCommonI18nPath(lang))
    }).pipe(
      map((translation: { moduleTranslation: any, commonTranslation: any }) => Object.assign(
        {},
        translation.commonTranslation,
        translation.moduleTranslation
      ))
    );
  }
}
