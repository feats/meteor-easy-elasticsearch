Package.describe({
  name: 'quadric:easy-elasticsearch',
  summary: "Elasticsearch Engine for EasySearch",
  version: "1.0.0",
  git: "https://github.com/quadric/meteor-easy-elasticsearch.git",
  documentation: 'README.md'
});

Npm.depends({
  'elasticsearch': '10.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  // Dependencies
  api.use(['check', 'ecmascript']);
  api.use(['easysearch:core@2.0.0', 'erasaur:meteor-lodash@3.10.0']);

  api.addFiles([
    'lib/data-syncer.js',
    'lib/engine.js'
  ]);

  api.export('EasySearch');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'ecmascript']);
  api.use('quadric:easy-elasticsearch');

  api.addFiles(['tests/engine-tests.js']);
});
