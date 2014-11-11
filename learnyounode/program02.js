var i = 0;
for (j = 2; j < process.argv.length; j++) {
    i += Number(process.argv[j])
}
console.log(i);