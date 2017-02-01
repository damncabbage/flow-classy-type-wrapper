// @flow
import { TypeWrapper } from '../src/TypeWrapper';

// Let's get trickier. :)
// This is a type representing an Array of T, guaranteed
// to have at least one element:
class NonEmptyArray<T> extends TypeWrapper<Array<T>> {}

// eg. number, Array<number> -> NonEmptyArray<number>
function toNonEmptyArray<T>(
  first: T,
  rest: Array<T>
): NonEmptyArray<T> {
  const list = [first].concat(rest);
  return NonEmptyArray.wrap(list);
}

const nemp = toNonEmptyArray(1, [2,3,4]);
const list = NonEmptyArray.unwrap(nemp);
console.log(list); // [1,2,3,4]
