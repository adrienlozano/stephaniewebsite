import { compose, curry, map, trim } from 'ramda';
const capitals = /[A-Z]/g
const separators = /([^\w\s]|[\s_])+/g

const replace = curry((regex, callback, str) => str.replace(regex, callback));
const replaceCapitals = replace(capitals);
const replaceSeparators = replace(separators);

const kebabCase = compose(
    replaceSeparators(match => '-'),
    trim,
    replaceCapitals(match => ` ${ match.toLowerCase() || match }`)
);

export default kebabCase;