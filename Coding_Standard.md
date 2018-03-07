# Coding Standards

This list contains self-defined standards for this repository.

- The starting brace should be in the statement's line, and ending brace should be in its own line.
 ```ts
function main(...args): void {
    // ...
}
 ```
- There must be spaces around operators, and after a colon, but not around (inner/outer) the parentheses.
 ```ts
const a: [any, any] = [c, d];
const b: number = (a + b) & (c + d);
 ```
- Nothing should be wrapped in multiple lines, except template literals and method chaining.
 ```ts
"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";
`
    Lorem ipsum dolor sit amet.
    Lorem ipsum dolor sit amet.
    Lorem ipsum dolor sit amet.
    Lorem ipsum dolor sit amet.
`;
a.m1().
    m2().
    m3().
    m4();
 ```
- No codes, except external ones, should be minified.
- The code should be indented by 4 spaces, whereas spaces is not allowed.
- The whole statement should be on one line. e.g.
 ```ts
if (condition) {
    // ...
}
 ```
- `for` statement is more recommended in all situation than while or do.
- `if`, `for`, `() => {}`, etc. should not lack their braces.
- Every property and method should be documented(jsdoc) and types defined(typescript).
 ```ts
function cubeRoot(number:number): number {
    // ...
}
 ```
- Every file should contain a comment-stub at the very beginning of the file, followed by a jsdoc `@module` tag.
- Comments should be spaced by 1.
 ```js
 // example
 /* check out the fact that there are spaces between the comment */
 /**
  * @name myVariable It is also the same on jsdoc
 */
 ```
- Simplicity is the best if it does not cost its performance.
- Instead of `var`, Use `let` and `const` 99% of time.
 ```ts
var foo: string = "a";

let foz: string = "b";
const foa: string = "c";
 ```

## Comment-Stub

The comment-stub is a comment, which is placed at top of documents, giving information about what the content of the file is.

The template of the comment-stub is:

```ts
/*
 * ${filename}.ts - Copyright (C) 2017-2018
 *
 * ${File's Description.}
 *
 * File is licenced under project's global licence.
 * See Licence.txt for more details.
 */
/**
 * @module ${fileName}
 */
```
