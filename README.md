A light TS library for converting to and from Arabic and Roman numerals. Supports numeric values between 1 and 3999.

## Install

Using [npm](https://docs.npmjs.com/), run:

```shell
$ npm install numerare
```

## Use

```ts
import { toRoman, toArabic } from 'numerare';
// ...

const romanNumerals: string = toRoman(1990);
// MCMXC

const arabicNumerals: number = toArabic(MCMXC);
// 1990
```

[MIT](./LICENSE)
