import { Target } from '@angular-devkit/architect';
import { Configuration } from 'webpack';

export default (
  config: Configuration,
  options: { tsConfig: string; [k: string]: any },
  target: Target
) => {
  // Webpack configuration
  console.log('config', config);
  // Merged options from project.json -> targets -> build -> options
  console.log('options', options);
  // Angular target project
  console.log('target', target);

  return {
    ...config,
  };
};
