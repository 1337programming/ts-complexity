const glob = require('glob');
const argv = require('yargs').argv;
const ComplexityRunner = require('./complexity-runner');
const globPattern = argv.pattern || '{,!(node_modules)/**/}*.ts';

glob(globPattern, (err, matches) => {
    if (err) {
        return process.exit(1);
    }

    const cr = new ComplexityRunner();
    let errorFound = false;

    matches.forEach(f => {
        const result = cr.getMetrics(f);
        errorFound = errorFound || result;
    });

    if (errorFound) {
        process.exit(1);
    }
});
