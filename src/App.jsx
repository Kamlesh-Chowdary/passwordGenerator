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

  return (
    <>
      <h1 className="text-4xl text-center text-white py-8">
        Password Generator
      </h1>
    </>
  );
}

export default App;
