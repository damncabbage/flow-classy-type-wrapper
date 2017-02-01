// @flow
import { TypeWrapper } from '../src/TypeWrapper';

// Something representing a validated Email.
// (This example explained in more detail here:
// http://robhoward.id.au/blog/2017/01/effective-types-a-parameterised-type-primer-flow/ )

class Email extends TypeWrapper<string> {}

function validateEmail(x: string): (Email | null) {
  if (x.match(/@/)) {
    return Email.wrap(x);
  }
  return null;
}

// A silly function
function sendEmail(from: Email, to: Email, subject: string, body: string) {
  const toAsString = Email.unwrap(to);
  // A stand-in for sending an email:
  console.log([
    "To: " + Email.unwrap(to),
    "From: " + Email.unwrap(from),
    "Subject: " + subject,
    body,
  ].join("\n"));
}

const from = validateEmail("alice@example.com");
const to = validateEmail("bob@example.com");

if (from === null || to === null) {
  throw new Error("Invalid email(s)!")
}

// From here on, we know that "to" and "from" are Email values, not strings.
// We could use them now, or send them on deeper into our app.
sendEmail(from, to, "Hello", "Eve is listening.");
