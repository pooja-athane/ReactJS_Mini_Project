// import React from "react";


// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = "usd",
//     amountDisabled = false,
//     currencyDisabled = false,
//     className = "",
// }) {


//     return (
//         <div
//             className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//             style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1766476210492-824c8a4b79b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//             }}
//         >
//             <div className="w-full">
//                 <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             convert()
//                         }}
//                     >
//                         <div className="w-full mb-1">
//                             <InputBox
//                                 label="From"
//                                 amount={amount}
//                                 currencyOptions={options}
//                                 onCurrencyChange={(currency) => setFrom(currency)}
//                                 onAmountChange={(amount) => { setAmount(amount) }}
//                                 selectCurrency={from}
//                             />
//                         </div>
//                         <div className="relative w-full h-0.5">
//                             <button
//                                 type="button"
//                                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                                 onClick={swap}
//                             >
//                                 swap
//                             </button>
//                         </div>
//                         <div className="w-full mt-1 mb-4">
//                             <InputBox
//                                 label="To"
//                                 amount={convertedAmount}
//                                 currencyOptions={options}
//                                 onCurrencyChange={(currency) => setTo(currency)}
//                                 selectCurrency={to}
//                                 amountDisabled={true}
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                             Convert {from.toUpperCase()} to {to.toUpperCase()}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );

// }

// export default InputBox;





import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    value={amount}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }}
                    disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((currencyValue) => (
                            <option
                                key={currencyValue}
                                value={currencyValue}
                            >
                                {currencyValue}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    );
}



export default InputBox