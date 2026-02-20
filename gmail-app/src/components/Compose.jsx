import React, { useState } from "react";

function Compose(
  {
    setShowCompose,
    setSentEmails
  }
) {

  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const send = () => {
    const newEmail = {
      to: to,
      subject: subject,
      message: message,
      time: "Now"
    }
    setSentEmails((prev) => [newEmail, ...prev])
    setShowCompose(false)
  }


  return (
    <div className="fixed bottom-6 right-6 h-[500px] w-[600px] bg-white rounded shadow-2xl flex flex-col">

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100 rounded-t-lg border-b">
        <h3 className="text-sm font-semibold">New Message</h3>
        <button
          onClick={() => setShowCompose(false)}
          className="text-gray-600 hover:text-black h-[30px] w-[30px] flex justify-center items-center p-1 border rounded-full"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3 flex-1">
        <input
          type="text"
          placeholder="To"
          value={to}
          className="w-full border-b outline-none py-2"
          onChange={(e) => setTo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          className="w-full border-b outline-none py-2"
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          placeholder="Message..."
          className="w-full h-28 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* Footer */}
      <div className="px-4 py-3  flex justify-start">
        <button
          // onClick={() => setShowCompose(false)}
          onClick={send}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Send
        </button>
      </div>

    </div>
  );
}

export default Compose;


