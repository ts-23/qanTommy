import clsx from "clsx";

/**
 * Construct class strings conditionally.
 * Wrapper for https://github.com/lukeed/clsx
 *
 * @example
 *
 * constructString('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');
 * //=> 'foo bar hello world cya'
 */

export const constructString = clsx;
