import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeCharacters) str += "~!@#$%^&*(){}[]";
    if (includeNumbers) str += "1234567890";

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(randomIndex);
    }

    setPassword(password);
  }, [length, includeNumbers, includeCharacters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, includeCharacters, includeNumbers, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-2xl text-center text-white my-3">
          Password Generator
        </h1>
        <div className="flex mb-4 overflow-hidden rounded-lg">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className=" outline-none w-full px-3 py-2 font-medium text-base"
          />
          <button className="outline-none bg-blue-700 font-medium text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex content-center justify-evenly text-base ">
          <div className="flex  gap-x-1">
            <input
              type="range"
              min={6}
              value={length}
              max={32}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: ({length})</label>
          </div>
          <div className="flex  gap-x-1">
            <input
              type="checkbox"
              onChange={() => setIncludeNumbers((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex  gap-x-1">
            <input
              type="checkbox"
              onChange={() => setIncludeCharacters((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
