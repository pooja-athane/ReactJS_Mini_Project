import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function App() {

    const [length, setlength] = useState(8)
    const [numberAllow, setnumberAllow] = useState(false)
    const [characterAllow, setcharacterAllow] = usecharacterState(false)
    const [password, setpassword] = useState("")
    const passwordref = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "qwertyuiopasdfghjklzxcvbnmQAZWSXEDCRFVTGBYHNUJMIKOLP"
        if (numberAllow) str += "0123456789"
        if (characterAllow) str += " !@#$%^&*-_+=[]{}~`"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setpassword(pass)
    }, [length, numberAllow, characterAllow, setpassword])

    // passwordGenerator()
    const copyPassword = useCallback(() => {
        passwordref.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllow, characterAllow, setpassword])

    return (
        <>

            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
                <h1 className="text-white">Password Generator</h1>
                <div className="flex shadow rounded-lg bg-white overflow-hidden mb-4">
                    <input type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        ref={passwordref} >
                    </input>
                    <button
                        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                        onClick={copyPassword}>Copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex text-sm gap-x-1">
                        <input
                            type="range"
                            min={8}
                            max={100}
                            value={length}
                            onChange={(e) => {
                                setlength(e.target.value)
                            }}
                        />

                        <label>{length}</label>

                    </div>
                    <div className="flex text-sm gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={characterAllow}
                            id="charInput"
                            onChange={() => {
                                setcharacterAllow((previousValue) => {
                                    !previousValue
                                })
                            }}
                        />
                        <label htmlFor="Character Input"></label>
                    </div>
                    <div className="flex text-sm gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllow}
                            id="numInput"
                            onChange={() => {
                                setnumberAllow((previousValue) => {
                                    !previousValue
                                })
                            }}
                        />
                        <label htmlFor="NumberInput" ></label>
                    </div>
                </div>
            </div>

        </>
    )
}
export default App