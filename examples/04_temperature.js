// @flow
import { TypeWrapper } from '../src/TypeWrapper';

// This uses something called "Phantom Types".
// We have Temperature wrapping a number, but then has
// Temperature carry some extra information (eg. Celsius)
// that only exists in the types ("at type-level").
class Temperature<T> extends TypeWrapper<number> {}
class Fahrenheit { }
class Celsius { }

function createF(n: number): Temperature<Fahrenheit> {
  return Temperature.wrap(n);
}

function convertFtoC(f: Temperature<Fahrenheit>): Temperature<Celsius> {
  const n = Temperature.unwrap(f);
  return Temperature.wrap((n - 32) / 1.8);
}

const boiling = convertFtoC(createF(212));
console.log(Temperature.unwrap(boiling)); // => 100
