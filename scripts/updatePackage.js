#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');
const replace = require('replace-in-file');

const VERSION = require('../lerna.json').version;

const repo = process.argv[2] || process.exit(1);

const dir = path.join(process.cwd(), 'packages', repo);
const packageJson = require(path.resolve(dir, 'package.json'));

async function main() {
  const src = path.resolve(dir, './src');

  const fromRegex = /static get version.*\n.*return '(.*)'/;
  const newVersion = `static get version() {\n    return '${VERSION}'`;

  const hasVersionFile = fs.existsSync(path.resolve(dir, 'version.js'));

  // Update version getters
  if (hasVersionFile) {
    await replace({ files: [`${dir}/version.js`], from: fromRegex, to: newVersion });
  } else if (fs.existsSync(src)) {
    await replace({ files: [`${dir}/src/*.{js,ts}`], from: fromRegex, to: newVersion });
  }

  const isPublicComponent = fs.existsSync(path.resolve(dir, 'rollup.config.js'));

  // Cleanup package.json
  delete packageJson.husky;
  delete packageJson['lint-staged'];

  [
    '@rollup/plugin-node-resolve',
    '@web/dev-server',
    '@web/test-runner',
    '@web/test-runner-saucelabs',
    'eslint',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'hermione',
    'hermione-esm',
    'hermione-sauce',
    'husky',
    'lint-staged',
    'magi-cli',
    'prettier',
    'stylelint',
    'stylelint-config-prettier',
    'stylelint-config-vaadin',
    'typescript'
  ].forEach((dep) => {
    if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
      delete packageJson.devDependencies[dep];
    }
  });

  if (isPublicComponent) {
    packageJson.scripts = {
      dist:
        'rimraf dist && polymer analyze vaadin-* > analysis.json && rollup -c rollup.config.js && cp analysis.json dist'
    };
  } else {
    delete packageJson.scripts;
  }

  const IGNORED = [
    '@vaadin/testing-helpers',
    '@vaadin/vaadin-development-mode-detector',
    '@vaadin/vaadin-license-checker',
    '@vaadin/vaadin-usage-statistics',
    '@vaadin/router'
  ];

  packageJson.version = VERSION;

  Object.keys(packageJson.dependencies).forEach((dep) => {
    if (dep.startsWith('@vaadin') && !IGNORED.includes(dep)) {
      packageJson.dependencies[dep] = `^${VERSION}`;
    }
  });

  if (packageJson.devDependencies) {
    Object.keys(packageJson.devDependencies).forEach((dep) => {
      if (dep.startsWith('@vaadin') && !IGNORED.includes(dep)) {
        packageJson.devDependencies[dep] = `^${VERSION}`;
      }
    });

    if (packageJson.devDependencies['@vaadin/testing-helpers']) {
      packageJson.devDependencies['@vaadin/testing-helpers'] = '^0.1.3';
    }
  }

  packageJson.publishConfig = {
    access: 'public'
  };

  // Format and write changes to package.json
  jsonfile.writeFileSync(`packages/${repo}/package.json`, packageJson, { spaces: 2 });
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });