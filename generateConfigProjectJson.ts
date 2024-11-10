const fs = require('fs');


// Загрузка JSON-файлов
const baseConfig = require('./projectConfigs/base.json');
const build = require('./projectConfigs/build.json');
const serve = require('./projectConfigs/serve.json');
const additinal = require('./projectConfigs/additinal-options.json');
const pre_build = require('./projectConfigs/pre-build.json');
// Объединение конфигураций
const mergedConfig = {
  ...baseConfig,
  targets: {
    ...build,
    ...serve,
    ...additinal,
    ...pre_build
  }
};


fs.writeFileSync('project.json', JSON.stringify(mergedConfig, null, 2));


