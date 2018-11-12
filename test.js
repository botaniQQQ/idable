const idable = require('./');

console.log(`A human readable random number ID:`);
for (let i = 0; i < 10; i++) {
    console.log(idable(8, true));
}

console.log(`\nA human readable random letter ID:`);
for (let i = 0; i < 10; i++) {
    console.log(idable(8, false));
}

console.log(`\nA human readable random letter and number ID:`);
for (let i = 0; i < 10; i++) {
    console.log(idable());
}