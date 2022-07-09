export const toArabic = (str: string) => {
  const regex = new RegExp(
    '^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$'
  );
  if (!regex.test(str)) {
    throw new Error('Invalid Roman numerals');
  }

  const translate = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let skipped = null;
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      if (skipped !== null) {
        result += translate[str[i]] - translate[skipped];
      } else {
        result += translate[str[i]];
      }
      break;
    }
    const current = str[i];
    const next = str[i + 1];
    if (current === 'I' && next === 'V') {
      skipped = current;
      continue;
    } else if (current === 'I' && next === 'X') {
      skipped = current;
      continue;
    } else if (current === 'X' && next === 'L') {
      skipped = current;
      continue;
    } else if (current === 'X' && next === 'C') {
      skipped = current;
      continue;
    } else if (current === 'C' && next === 'D') {
      skipped = current;
      continue;
    } else if (current === 'C' && next === 'M') {
      skipped = current;
      continue;
    } else {
      if (skipped != null) {
        const skippedInt = translate[skipped];
        result += translate[current] - skippedInt;
        skipped = null;
      } else {
        result += translate[current];
      }
    }
  }
  return result;
};

export const toRoman = (num: number) => {
  if (num < 1 || num > 3999) {
    throw new Error('Input must be between 1 and 3999');
  }
  let result = '';
  const translate = [
    { arabic: 1000, roman: 'M' },
    { arabic: 900, roman: 'CM' },
    { arabic: 500, roman: 'D' },
    { arabic: 400, roman: 'CD' },
    { arabic: 100, roman: 'C' },
    { arabic: 90, roman: 'XC' },
    { arabic: 50, roman: 'L' },
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' },
  ];

  for (let step of translate) {
    while (num >= step.arabic) {
      num -= step.arabic;
      result += step.roman;
    }
  }
  return result;
};
