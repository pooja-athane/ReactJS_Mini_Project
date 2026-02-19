import React from "react";

function Compose({ setShowCompose }) {
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
          className="w-full border-b outline-none py-2"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full border-b outline-none py-2"
        />

        <textarea
          placeholder="Message..."
          className="w-full h-28 outline-none"
        />
      </div>

      {/* Footer */}
      <div className="px-4 py-3  flex justify-start">
        <button
          onClick={() => setShowCompose(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Send
        </button>
      </div>

    </div>
  );
}

export default Compose;


