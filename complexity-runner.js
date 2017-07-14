const MetricsParser = require('tsmetrics-core/MetricsParser').MetricsParser;
const MetricsConfiguration = require('tsmetrics-core/MetricsConfiguration').MetricsConfiguration;
const glob = require('glob');
const path = require('path');

const maxComplexity = 10;

let errorFound = false;
module.exports = class ComplexityRunner {

    getMetrics(filePath) {
        var metricsForFile = MetricsParser.getMetrics(filePath, new MetricsConfiguration(), 1/* ts.ScriptTarget.ES5 */);
        return this.log(metricsForFile.metrics, filePath, 0);
    }

    log(model, file, level) {
        let errorFound = false;
        if (level > 0 && model.getCollectedComplexity() > maxComplexity) {
            console.log(file + ': Complexity:' + model.toLogString('Depth: ' + level + ' -'));
            errorFound = true;
        }

        model.children.forEach(element => {
            this.log(element, file, level + 1);
        });
        return errorFound;
    }
}