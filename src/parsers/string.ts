import { ParserWithExtensions } from "../utils";
import { EmailValidator } from "../validations/email";

function isString(x: unknown): asserts x is string {
  if (typeof x !== "string") {
    throw new Error("Not a string!");
  }
}

export type StringParser = ParserWithExtensions<string, [EmailValidator]>;

export const string = () => ({
  parse(arg: unknown): string {
    isString(arg);
    return arg;
  },
});