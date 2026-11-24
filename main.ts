const fs = require('node:fs');
const line = 'LGTM. The tests pass, the code is clean, and in a hundred years none of it will matter — but the diff is tidy.';
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', line, 'utf8');
