# ls-curry
A very simple but flexible tool of currying and uncurrying

## How simple is it?
There area only two sentences in *index.js*, but it really work. Of course you can run `npm test` to check its applicability.

## How to import this package?
I suggest you add the following codes in the `js` file:
```js
// ES6 module
import { currying, uncurrying } from 'ls-curry';

// CommonJS module
var currying = require('ls-curry').currying;
var uncurrying = require('ls-curry').uncurrying;
```

## How to use the function `currying`?
The source code of `currying` is this:
```js
const currying = (f, ...xs) => (...xi) => xi.length === 0 ? (...xn) => f(...xs, ...xn) : currying(f, ...xs, ...xi);
```
You call the currying function like this:
```js
let add0 = (a,b,c,d) => a + b + c + d;

let add1 = currying(add0);
add1(1)(2)(3)(4)()(); // equal 10

let add2 = currying(add0, 1, 2);
add2(3)(4)()();      // equal 10

let add3 = currying(add0, 1);
add3(2)()(3,4);      // equal 10
```
There are some tips:
- When using `currying`, you can pass the head parameters for the target function;
- When calling the curried function, remember the first empty bracket tell the module that currying is finished;
- Then, you can apply the rest parameters in the following bracket;

Note: You may be astonished at those brackets. I can't look for the solution that satisfies no parameter limit and the currying function in the meantime. If you know, please tell me.

## How to use the function `uncurrying`?
The source code of `uncurrying` is this:
```js
const uncurrying = f => (...xs) => xs.length === 0 ? f : uncurrying(f(xs[0]))(...xs.slice(1));
```
You call the uncurrying function like this:
```js
let add4 = a => b => c => d => a + b + c + d;

let add5 = uncurrying(add4);
add5(1,2,3,4); // equal 10

let add6 = uncurrying(currying(add0));
add6(1,2,3,4)()();      // equal 10
```
