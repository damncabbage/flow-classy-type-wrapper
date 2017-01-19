// @flow

// Testing boilerplate
declare var describe: Function;
declare var it: Function;
import assert from 'assert';

import { TypeWrapper } from '../src/TypeWrapper';

describe("TypeWrapper", () => {
  it("declares a wrapper", () => {

    class UserID extends TypeWrapper<string> {}

    const idString = "123-abcd";
    const nameString = "Bert";

    const id: UserID = UserID.wrap(idString);
    const user = {
      id: id,
      name: nameString,
    };
    const userSummary = UserID.unwrap(id) + ": " + user.name;

    assert.strictEqual(
      userSummary,
      idString + ": " + nameString
    );

    assert.strictEqual(
      UserID.unwrap(UserID.wrap(idString)),
      idString
    );

    // Expected failures
    // (see https://medium.com/@gcanti/testing-flow-declaration-files-69915089fa68):

    // $ExpectError
    const x1: string = "hello " + UserID.wrap("world");

    // $ExpectError
    const x2: UserID = UserID.wrap(1234);
 
    // $ExpectError
    const x3: UserID = UserID.unwrap("stringy-string");
  });
});
