const glob = require('glob');
console.log(process.argv);
const globPattern = process.argv.length > 2 ? process.argv[2] : '{,!(node_modules)/**/}*.ts';
const ComplexityRunner = require('./complexity-runner');

glob(globPattern, (err, matches) => {
    if (err) {
        return process.exit(1);
    }

    const cr = new ComplexityRunner();
    let errorFound = false;

    matches.forEach(f => {
        const result = cr.getMetrics(f);
        let errorFound = errorFound || result;
    });

    if (errorFound) {
        process.exit(1);
    }
});
