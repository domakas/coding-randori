const { exec } = require('child_process');

function LempaReporter(baseReporterDecorator, config) {
  baseReporterDecorator(this);

  this.onRunComplete = function(browsers, resultInfo) {
    if (resultInfo.failed > 0) {
      this.turnOnLempa();
    } else {
      this.turnOffLempa();
    }
  };

  this.turnOnLempa = function() {
    exec(`echo "A" > ${config.devicePath}`);
  };

  this.turnOffLempa = function() {
    exec(`echo "B" > ${config.devicePath}`);
  }
}

LempaReporter.$inject = ['baseReporterDecorator', 'config.lempaReported'];

module.exports = {
  'reporter:lempa': ['type', LempaReporter]
};