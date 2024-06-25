# toju-basic-utils

toju-basic-utils is a JavaScript utility library that provides a collection of helper functions essential for developing JavaScript applications. These utility functions include type checks such as `isString`, `isBoolean`, type conversions such as `toBoolean`, and flow control functions such as `debounce`.

## Key features of toju-basic-utils include:

- Type checking functions: provides functions such as `isString` and `isBoolean` to check the type of a variable, which helps prevent type errors at runtime.
- Type conversion functions: Includes functions such as `toBoolean` to safely and efficiently convert values to different types.
- Flow control functions: Provides functions such as `debounce` to control how often functions are executed, which is useful for events such as scrolling or user input.
- Easy to use: Each utility function is simple and straightforward, making it easy to use in any JavaScript project.
Whether you're working on a complex web application or a simple JavaScript script, toju-basic-utils can help you write cleaner, safer and more efficient code.

## Installation

```bash
npm install toju-basic-utils
```
## Uso

### kebabCase

```javascript
import { kebabCase } from 'toju-basic-utils'

console.log(kebabCase('Hello World')) // 'hello-world'
```

### camelCase

```javascript
import { camelCase } from 'toju-basic-utils'

console.log(camelCalse('hello world')) // 'helloWorld'
```

## Functions List

### String

Function          | ASCII                          
------------------|-------------------------------
`camelCase(str)`  | Convert string to camel case           
`capitalize(str)` | Convert string to capitalize             
`kebabCase(str)`  | Convert string to kebab case
`snakeCase(str)`  | Convert string to snake case


### Check Types

Function                   | Description
---------------------------|-----------------------------------------
`arraylable(value)`        | Returns the array if not null, otherwise returns an empty array.
`isArray(value)`           | Check if the given value is an array.
`isBoolean(value)`         | Check if the given value is a boolean.
`isDate(value)`            | Check if the given value is a Date object.
`isError(value)`           | Check if the given value is an Error object.
`isFunction(value)`        | Check if the given value is a function.
`isNullOrUndefined(value)` | Check if the given value is null or undefined.
`isNumber(value)`          | Check if the given value is a number.
`isPlainObject(value)`     | Check if the given value is a plain JavaScript object.
`isRegExp(value)`          | Check if the given value is a RegExp object.
`isString(value)`          | Check if the given value is a string.

### Check Contents

Function                      | Description
------------------------------|-----------------------------------------
`hasKey(object, key)`         | Check if the given object has the specified key.
`hasValue(object, value)`     | Check if the given object contains the specified value.
`includesValue(array, value)` | Check if the given array includes the specified value.
`isBlank(value)`              | Check if the given value is blank (null, undefined, empty string, or only whitespace).
`isEmpty(value)`              | Check if the given value is empty (for arrays, strings, or objects).
`isEmptyArray(array)`         | Check if the given array is empty.
`isEmptyObject(object)`       | Check if the given object is empty (no own properties).
`isEmptyString(string)`       | Check if the given string is empty or only contains whitespace.

### Convert Types

Function                   | Description
---------------------------|-----------------------------------------
`cloneDeep(value)`         | Creates a deep clone of the value.
`mergeObjects(...objects)` | Merges multiple objects into a single object.
`toArray(value)`           | Converts the value to an array.
`toBoolean(value)`         | Converts the value to a boolean.
`toNumber(value)`          | Converts the value to a number.
`toString(value)`          | Converts the value to a string.
`uniqueArray(array)`       | Returns a new array with unique elements from the given array.


### Timing

Function                   | Description
---------------------------|-----------------------------------------
`debounce(fn, delay)`      | Wraps a function `fn` with a debounce mechanism. It delays the execution of `fn` until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
`sleep(ms)`                | Returns a promise that resolves after `ms` milliseconds, effectively pausing execution for that duration.
`throttle(fn, delay)`      | Wraps a function `fn` with a throttle mechanism. It ensures that `fn` is only called at most once every `delay` milliseconds, regardless of how many times the throttled function is invoked.


## Contributions

Contributions are welcome. Please open an issue or pull request to suggest changes or improvements.

This README file provides an overview of the package, installation instructions, usage examples for each feature, instructions for running the tests and an invitation to contribute.
