# TS Complexity
Complexity Tester for TypeScript, based on TS Code Metrics

Run with the command ts-complexity [FILES], where [FILES] is a glob pattern.

## Installation
To install, run `npm install ts-complexity` or `npm install -g ts-complexity` for a global installation. 

## Usage
Run the command `ts-complexity` from the shell. This will make sure all complexity is below the threshold.

### Options

    - max-complexity (Default: 15) The maximum TS Code Metrics complexity to allow.
    - pattern (Default: '{,!(node_modules)/**/}*.ts') The glob pattern of files to run.
