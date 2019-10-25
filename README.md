# defer

```js
const makeDefer = require("@xarc/defer");

const defer = makeDefer();

setTimeout(() => defer.resolve("test"), 100);

defer.promise.then(x => console.log("defer promise resolved", x));
```

## Using custom Promise

```js
const Promise = require("bluebird");
const makeDefer = require("@xarc/defer");

const defer = makeDefer(Promise);
```

## API

```js
makeDefer([Promise]);
```

Returns defer object:

```js
{
  promise, resolve, reject;
}
```
