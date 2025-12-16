import React from "react";

function Button({ bgColorName, bgColorUpdate }) {
    return (
        <>
            <button
                className="h-12 w-28 rounded-full text-white"
                style={{ backgroundColor: bgColorName }}
                // style={{backgroundColor: pink}} 
                onClick={bgColorUpdate}
            >
                {bgColorName}
            </button>
        </>
    )
}

export default Button