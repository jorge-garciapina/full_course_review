import React from "react";
import useLocalStorage from "./useLocalStorage";
import useSessionStorage from "./useSessionStorage";
import useIndexedDB from "./useIndexedDB";

const MyComponent: React.FC = () => {
  const [localValue, setLocalValue] = useLocalStorage<string>(
    "myLocalKey",
    "defaultLocalValue"
  );
  const [sessionValue, setSessionValue] = useSessionStorage<string>(
    "mySessionKey",
    "defaultSessionValue"
  );
  const [indexedDBValue, setIndexedDBValue] = useIndexedDB<string>(
    "myIndexedDBKey",
    "defaultIndexedDBValue"
  );

  return (
    <div>
      <div>
        <h2>Local Storage</h2>
        <input
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
        />
      </div>
      <div>
        <h2>Session Storage</h2>
        <input
          type="text"
          value={sessionValue}
          onChange={(e) => setSessionValue(e.target.value)}
        />
      </div>
      <div>
        <h2>IndexedDB Storage</h2>
        <input
          type="text"
          value={indexedDBValue}
          onChange={(e) => setIndexedDBValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MyComponent;
