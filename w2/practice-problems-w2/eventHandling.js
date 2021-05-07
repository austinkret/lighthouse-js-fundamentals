const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  process.stdin.write('.');
  if (key === '\u0003') {
    process.exit();
  }
});

console.log('after callback');