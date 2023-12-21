import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // Initialize
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  // Function
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  // copy from clipboard
  function copyPassword() {
    // writing the password to clipboard
    window.navigator.clipboard.writeText(password);
    // selecting the password text to show the user the text is copied
    passRef.current.select();
  }
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passRef}
            className="outline-none w-full py-1 px-3"
          />
          <button
            className="outline-none bg-blue-700 hover:bg-green-500 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name=""
            id=""
            className="cursor-pointer"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min={6}
            max={100}
          />
          <label htmlFor="length">Length: {length}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
