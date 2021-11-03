import {FeaturesConfiguration, ModulesConfiguration} from './configuration';

export class ConfigurationHelper {
  static i18nPrefix = 'assets/i18n';
  static i18nFileExtension = 'json';
  static common = ModulesConfiguration.common;
  static MainModule = ModulesConfiguration.main;
  static CoreModule = ModulesConfiguration.core;
  static FeatureOne = FeaturesConfiguration.featureOne;
  static FeatureTwo = FeaturesConfiguration.featureTwo;
}
