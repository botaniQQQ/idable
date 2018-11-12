# A human readable ID for NodeJS.

### Installation
```
npm i idable
```

### Usage

A human readable random number ID:

```javascript
const idable = require('idable');

console.log(idable(8, true));
// => 98703713
```

A human readable random letter ID:

```javascript
const idable = require('idable');

console.log(idable(8, false));
// => locolagi
```

A human readable random letter and number ID:

```javascript
const idable = require('idable');

console.log(idable(8));
// => od64udim
```