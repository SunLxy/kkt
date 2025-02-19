import { ParsedArgs } from 'minimist';
import { WebpackConfiguration, LoaderConfOptions } from './utils/loaderConf';

export * from './overrides/paths';
export * from './utils/loaderConf';
export * from './utils/getStyleLoaders';
export * from './plugins/miniCssExtractPlugin';
export * from './utils/path';
import { Paths } from './utils/path';

export interface BuildArgs extends ParsedArgs {
  isNotCheckHTML?: boolean;
  overridePaths?: Partial<Paths>;
  /**
   * Specify the configuration name. E.g: `.kktrc`
   */
  configName?: string;
  overridesWebpack?: (
    conf: WebpackConfiguration,
    env: 'development' | 'production',
    options: LoaderConfOptions,
  ) => WebpackConfiguration;
}

export interface StartArgs extends BuildArgs {
  docs?: string;
}
export interface TestArgs extends ParsedArgs {}
