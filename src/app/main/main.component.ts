import {Component, OnInit} from '@angular/core';
import {ConfigurationHelper} from '@app/configuration';
import {I18nHelper} from '@app/core';
import {AppLanguage} from '../core/i18n';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  get featureOnePath(): string {
    return ConfigurationHelper.FeatureOne
  }

  get featureOneTwoPath(): string {
    return ConfigurationHelper.FeatureTwo
  }

  get enLang(): AppLanguage {
    return AppLanguage.En;
  }

  get frLang(): AppLanguage {
    return AppLanguage.Fr;
  }

  onLanguageChange(language: any) {
    I18nHelper.changeLanguage(language);
  }
}

