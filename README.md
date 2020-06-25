## Reproduction

```bash
$ yarn install
$ yarn yarn test:root-hooks --watch # passes unexpectedly
$ yarn yarn test:local-hooks --watch # fails as expected
```

## Explanation

A thrown error in `afterEach` behaves differently in watchmode if that hook was a [root hook](https://mochajs.org/#root-hook-plugins) compared to "normal" hooks.

In a single run both `yarn test:root-hooks` and `yarn test:local-hooks` will bail out after the first test because `afterEach` threw.
In watchmode `yarn test:root-hooks --watch` will pass every test and not log any error while `yarn test:local-hooks --watch` will bail on the first error just like it did in a single run

## Motivation

During the test we spy on console.error calls and want to throw if there were any.
Throwing directly in that call is not viable with React in JSDOM since the callstack will be unusable.
