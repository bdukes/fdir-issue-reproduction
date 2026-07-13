import { parseArgs } from "node:util";
import { fdir } from "fdir";

const options = {
	withoutBasePath: { type: 'boolean', },
	withoutGlob: { type: 'boolean', },
	withoutContentDir: { type: 'boolean', },
	withComplexGlob: { type: 'boolean', },
};

const { values: { withoutBasePath, withoutGlob, withoutContentDir, withComplexGlob, }, } = parseArgs({ options, });

let builder = new fdir();
if (!withoutBasePath) {
	builder = builder.withBasePath();
}
if (!withComplexGlob && !withoutGlob) {
	builder = builder.glob('*.txt');	
} else if (withComplexGlob) {
	builder = builder.glob('**/*.txt');
} else {
	builder = builder.filter(f => f.endsWith('.txt'));
}
if (!withoutContentDir) {
	builder = builder.crawl('content');
} else {
	builder = builder.crawl('.');
}
const files = builder.sync();
console.log(files);

