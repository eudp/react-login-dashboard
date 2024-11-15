import { useState } from "react";

export default function useLocalStorage<T>(
  keyName: string,
  defaultValue: T | null
): [T | null, (newValue: T | null) => void] {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  const setValue = (newValue: T | null) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.error(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}
