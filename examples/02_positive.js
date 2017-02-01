// @flow
import { TypeWrapper } from '../src/TypeWrapper';

// Something representing a positive number; a small set of
// the all the possible number values, without having to
// list them all out.
// (This example is pretty similar to Email from the blog post:
// http://robhoward.id.au/blog/2017/01/effective-types-a-parameterised-type-primer-flow/ )
class PositiveNumber extends TypeWrapper<number> {}

function toPositive(n: number): (PositiveNumber | null) {
  if (n >= 0) {
    return PositiveNumber.wrap(n);
  }
  return null;
}

function repeat<T>(item: T, times: PositiveNumber): Array<T> {
  return Array(PositiveNumber.unwrap(times)).fill(item);
}

const times = toPositive(5);
if (times !== null) {
  const fiveNines = repeat(9, times);
  console.log(fiveNines); // [9,9,9,9,9]
}
