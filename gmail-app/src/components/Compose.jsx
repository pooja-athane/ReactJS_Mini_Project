import React, { useState } from "react";

function Compose(
  {
    setShowCompose,
    setSentEmails,
    setDraftEmails
  }
) {

  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const send = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (to.trim() === "") {
      setError("Email is Required")
      return;
    }

    if (!emailRegex.test(to)) {
      setError("Please enter a valid email address")
      return;
    }

    const newEmail = {
      to: to,
      subject: subject,
      message: message,
      time: "Now"
    }
    setSentEmails((prev) => [newEmail, ...prev])
    setShowCompose(false)
  }

  const handleClose = () => {

    if (to.trim() !== "" || subject.trim() !== "" || message.trim() !== "") {

      const newDraft = {
        // id: Date.now(),
        to: to,
        subject: subject,
        message: message,
        time: "Now"
      }

      setDraftEmails((prev) => [newDraft, ...prev])
    }

    setShowCompose(false)
  }

return (
    <div className="fixed inset-0 md:bottom-6 md:right-6 md:inset-auto bg-black bg-opacity-30 flex justify-center items-center md:bg-transparent z-50">

      <div className="w-full h-full md:h-[500px] md:w-[600px] bg-white rounded-none md:rounded shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b">
          <h3 className="text-sm font-semibold">New Message</h3>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-black h-[30px] w-[30px] flex justify-center items-center border rounded-full"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-3 flex-1 overflow-y-auto">
          <input
            type="text"
            placeholder="To"
            value={to}
            className="w-full border-b outline-none py-2"
            onChange={(e) => setTo(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            className="w-full border-b outline-none py-2"
            onChange={(e) => setSubject(e.target.value)}
          />

          <textarea
            placeholder="Message..."
            className="w-full h-40 md:h-28 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Footer */}
        <div className="px-4 py-3">
          <button
            onClick={send}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}

export default Compose;

