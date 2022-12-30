import { useEffect, useState } from "react";

const getStorageValue = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    if (!saved) return value;
    const initial = JSON.parse(saved);
    return initial;
  }
};

const useLocalStorage = (key: string, value: string) => {
  const [storageValue, setStorageValue] = useState(() => {
    return getStorageValue(key, value);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue));
  }, [key, storageValue]);

  return [storageValue, setStorageValue];
};

export default useLocalStorage;
