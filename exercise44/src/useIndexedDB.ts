import { useState, useEffect } from "react";

function useIndexedDB<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Open a database
  const openDB = async () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open("MyDatabase", 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = () => {
        const db = request.result;
        db.createObjectStore("MyObjectStore", { keyPath: "id" });
      };
    });
  };

  // Read value from IndexedDB
  const readValue = async () => {
    const db = await openDB();
    return new Promise<T>((resolve, reject) => {
      const transaction = db.transaction("MyObjectStore", "readonly");
      const store = transaction.objectStore("MyObjectStore");
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result?.value ?? initialValue);
      request.onerror = () => reject(request.error);
    });
  };

  // Write value to IndexedDB
  const writeValue = async (value: T) => {
    const db = await openDB();
    const transaction = db.transaction("MyObjectStore", "readwrite");
    const store = transaction.objectStore("MyObjectStore");
    store.put({ id: key, value });
  };

  useEffect(() => {
    readValue().then((value) => setStoredValue(value));
  }, []);

  const setValue = (value: T) => {
    setStoredValue(value);
    writeValue(value);
  };

  return [storedValue, setValue];
}

export default useIndexedDB;
