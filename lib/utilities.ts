// If max = 2, it will return 0 or 1
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const getNonDuplicatedRandomInt = (
  max: number,
  oldValue: number
): number => {
  const newValue = Math.floor(Math.random() * max);
  if (newValue !== oldValue) {
    return newValue;
  }

  return getNonDuplicatedRandomInt(max, oldValue);
};

export const handle = async <T>(
  promise: Promise<T>,
  defaultError: any = "rejected"
): Promise<T[] | [any, T]> => {
  return promise
    .then((data) => [undefined, data])
    .catch((error) => Promise.resolve([error || defaultError, undefined]));
};

// Based on discussion:
// https://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document

export const getElementPosition = (element: HTMLElement) => {
  const box = element.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const x = box.left + scrollLeft - clientLeft;
  const y = box.top + scrollTop - clientTop;

  return {
    x: x,
    y: y,
    width: box.width,
    height: box.height,
  };
};
