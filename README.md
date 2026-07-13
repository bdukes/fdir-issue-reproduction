# [SSCCE](https://sscce.org/) Reproduction of [fdir issue #168](https://github.com/thecodrr/fdir/issues/168)

## Description
[fdir](https://thecodrr.github.io/fdir/) return zero matches when the following three features are used together:
- `withBasePath`
- `glob` (but only for simple globs)
- `crawl` with a root directory (but not when the default `"."` is passed)

## Usage
1. Run `npm install`
2. Run `node app.mjs` or `node run app`

### Options
The app accepts four CLI flags which can adjust the above features. Using any of these flags will result in the correct results being obtained. Only without the flags does is the issue reproducible.

#### `--withoutBasePath`
When `--withoutBasePath` is passed (or `npm run app:withoutBasePath` is run), the `withoutBasePath()` call is excluded.

#### `--withoutGlob`
When `--withoutGlob` is passed (or `npm run app:withoutGlob` is run), the `glob('*.txt')` call is replaced with `filter(file => file.endsWith('.txt'))`.

#### `--withComplexGlob`
When `--withComplexGlob` is passed (or `npm run app:withComplexGlob` is run), the `glob('*.txt')` call is replaced with `glob('**/*.txt')`.

#### `--withoutContentDir`
When `--withoutContentDir` is passed (or `npm run app:withoutContentDir` is run), the `crawl('content')` call is replaced with `crawl('.')`.

