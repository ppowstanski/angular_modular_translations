import {ConfigurationHelper} from '@app/configuration';

export class TranslationLoaderHelper {
  private static MODULE_PLACEHOLDER = '_MODULE_NAME_';
  private static LANGUAGE_PLACEHOLDER = '_LANGUAGE_';

  private static MODULE_i18n_PATH =
    `${ConfigurationHelper.i18nPrefix}/${TranslationLoaderHelper.MODULE_PLACEHOLDER}/${TranslationLoaderHelper.LANGUAGE_PLACEHOLDER}.${ConfigurationHelper.i18nFileExtension}`;
  private static COMMON_i18n_PATH =
    `${ConfigurationHelper.i18nPrefix}/${ConfigurationHelper.common}/${TranslationLoaderHelper.LANGUAGE_PLACEHOLDER}.${ConfigurationHelper.i18nFileExtension}`;

  public static createModuleI18nPath(moduleName: string, language: string): string {
    return TranslationLoaderHelper.MODULE_i18n_PATH
      .replace(TranslationLoaderHelper.MODULE_PLACEHOLDER, moduleName)
      .replace(TranslationLoaderHelper.LANGUAGE_PLACEHOLDER, language);
  }

  public static createCommonI18nPath(language: string): string {
    return TranslationLoaderHelper.COMMON_i18n_PATH
      .replace(TranslationLoaderHelper.LANGUAGE_PLACEHOLDER, language);
  }
}
