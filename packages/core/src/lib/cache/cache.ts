export const cache = () => {
  const cacheStore = new Map<string, unknown>();

  return {
    get: (key: string) => cacheStore.get(key),
    set: (key: string, value: unknown) => cacheStore.set(key, value),
    clear: () => cacheStore.clear(),
  };
};
