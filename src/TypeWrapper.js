// @flow

export class TypeWrapper<Inner> {
  // A constructor that can't be called (nothing can satisfy the "empty" type).
  constructor(_: empty): void {}

  // Inner -> Wrapped Value
  static wrap(x: Inner): this {
    return (x: any);
  }

  // Wrapped Value -> Inner
  static unwrap(x: this): Inner {
    return (x: any);
  }
}

// eg.
// class UserID extends TypeWrapper<string> {}
//
// const id = UserID.wrap("123-abcd");
// const user = { id: id, name: "Bert" }
// const userSummary = UserID.unwrap(id) + ": " + user.name;
