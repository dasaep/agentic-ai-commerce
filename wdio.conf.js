const { spawn } = require('child_process');

let server;

exports.config = {
  runner: 'local',
  specs: ['./wdio/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': { args: ['--headless', '--disable-gpu', '--no-sandbox'] }
  }],
  logLevel: 'error',
  framework: 'mocha',
  reporters: ['spec'],
  services: ['chromedriver'],
  mochaOpts: { timeout: 60000 },
  onPrepare: function () {
    server = spawn('npm', ['run', 'dev'], { stdio: 'inherit' });
  },
  onComplete: function () {
    if (server) server.kill();
  }
};
