export const TYPE = {
  1: '1',
  2: '2',
};

export const generatorInput = (number = 12) => {
  let tempArr: any[] = [];
  for (let i = 0; i < number; i++) {
    tempArr = [...tempArr, i];
  }

  return tempArr;
};

export const generatorDot = (number = 0) => {
  let tempArr: any[] = [];
  for (let i = 0; i < number; i++) {
    tempArr = [...tempArr, '.'];
  }

  return tempArr.join('');
};

export const generatorBox = (number = 0) => {
  let tempArr: any[] = [];
  for (let i = 0; i < number; i++) {
    tempArr = [...tempArr, i];
  }

  return tempArr;
};

export const range = (start: any, end: any): any[] => {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
};

export const convertToFormSelect = (
  list: any[],
  fieldForLabel: string | undefined = undefined,
  fieldForValue: string | undefined = undefined,
  noneOption = false,
) => {
  if (!fieldForLabel || !fieldForValue) {
    return [
      ...list.reduce((arr, el) => {
        return [...arr, { label: el, value: el }];
      }, []),
    ];
  }
  if (typeof list === 'object' && list) {
    const listReturn = [
      ...list.reduce((arr, el) => {
        return [...arr, { ...el, label: el[fieldForLabel] || 'None', value: el[fieldForValue] || '' }];
      }, []),
    ];

    if (noneOption) {
      return [{ label: 'None', value: '' }, ...listReturn];
    }
    return listReturn;
  }

  return [];
};

export const convertOneToTwoString = (number: number) => {
  if (!isNaN(number)) {
    let numberToString = `${number}`;
    if (numberToString.length < 2) {
      numberToString = '0' + numberToString;
    }

    return numberToString;
  }

  return '';
};

export const suppressNonNumericInput = (event: any) => {
  const key = event.which || event.keyCode;
  const ctrl =
    event.ctrlKey || event.metaKey ? event.ctrlKey || event.metaKey : key === 17 || key === 91 ? true : false;
  // metaKey support for Mac OS
  if (
    !(
      key === 189 || // -
      key === 190 || //.
      key === 9 || // Tab
      key === 13 ||
      (key === 65 && ctrl) || // Ctrl + A
      (key === 86 && ctrl) || // Ctrl + V
      (key === 67 && ctrl) || // Ctrl + C
      key == 187 ||
      key == 8 || // backspace
      key == 46 || // delete
      (key >= 35 && key <= 40) || // arrow keys/home/end
      (key >= 48 && key <= 57) || // numbers on keyboard
      (key >= 96 && key <= 105)
    ) // number on keypad
  ) {
    event.preventDefault(); // Prevent character input
  }
};
