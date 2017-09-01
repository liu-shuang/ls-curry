const currying = (f, ...xs) => (...xi) => xi.length === 0 ? (...xn) => f(...xs, ...xn) : currying(f, ...xs, ...xi);
const uncurrying = f => (...xs) => xs.length === 0 ? f : uncurrying(f(xs[0]))(...xs.slice(1));

export { currying, uncurrying };
