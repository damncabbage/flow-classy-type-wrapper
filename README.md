# Classy Type-Wrapper for Flow [![](https://img.shields.io/npm/v/flow-classy-type-wrapper.svg)](https://npmjs.com/package/flow-classy-type-wrapper)

A tiny module that gives you the `TypeWrapper` class + static methods bundle, for quick definition of type wrappers.


## What are Type Wrappers?

A way of declaring a new type, that is simply a wrapper around another type, to make mix-ups easier to prevent. For example, declaring a wrapper around `string` called `UserID`, to stop User IDs from being mixed up with other strings, like usernames or descriptions.

This is elaborated on [in this blog post](http://robhoward.id.au/blog/2017/01/effective-types-a-parameterised-type-primer-flow/).


## Usage

```js
// @flow
import { TypeWrapper } from 'flow-classy-type-wrapper';

// Declare a new type wrapper:
class UserID extends TypeWrapper<string> {}

// String -> UserID-wrapped String
const id = UserID.wrap("123-abcd");

// $ExpectError - Can't use like a string without unwrapping.
const wrong = "Hello, user #" + id;

function greet(userId: UserID, name: string): string {
  // UserID-wrapped String -> String
  const userIdAsString = UserID.unwrap(userId)

  // Unwrapped; fine to use now.
  return "User #" + userIdAsString + ": " + name;
}

console.log(greet(id, "Bert"));
```

See the `examples/` directory for more.

Inspired by [@mkscrg](https://github.com/mkscrg)'s original "class bundle" pattern from [this Flow issue](https://github.com/facebook/flow/issues/465#issuecomment-268411867).
