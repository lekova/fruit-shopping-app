import { WebStorageUtility } from './web-storage.utility';

// initialization cache
const cache = {};

export const WebStorage = (webStorage: Storage, key: string) => {
  return (target: Object, propertyName: string): void => {
    key = key || propertyName;

    const storageKey = WebStorageUtility.generateStorageKey(key);
    const storedValue = WebStorageUtility.get(webStorage, key);

    Object.defineProperty(target, propertyName, {
      get: function () {
        return WebStorageUtility.get(webStorage, key);
      },
      set: function (value: any) {
        if (!cache[key]) {
          // first setter handle
          if (storedValue === null) {
            // if no value in localStorage, set it to initializer
            WebStorageUtility.set(webStorage, key, value);
          }

          cache[key] = true;
          return;
        }

        WebStorageUtility.set(webStorage, key, value);
      },
    });
  };
};

export function LocalStorage(key?: string) {
    return WebStorage(localStorage, key);
}

export function SessionStorage(key?: string) {
    return WebStorage(sessionStorage, key);
}
