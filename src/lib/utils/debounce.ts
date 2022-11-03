// Debounce function
// ref: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_debounce

export const debounce = (func: any, wait: number, immediate?: boolean) => {
  let timeout: NodeJS.Timeout;

  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);

    if (immediate && !timeout) func.apply(context, args);
  };
};
