const handle = async <T>(
  promise: Promise<T>,
  defaultError: any = "rejected"
): Promise<T[] | [any, T]> => {
  return promise
    .then((data) => [undefined, data])
    .catch((error) => Promise.resolve([error || defaultError, undefined]));
};

export default handle;
