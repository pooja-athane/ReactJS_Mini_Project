import React from 'react'
import EmailRow from './EmailRow';
import { emails } from '../constants/emails';

function EmailList(
  {
    activeSection,
    selectedEmail,
    setSelectedEmail,
    sentEmails,
    draftEmails
  }
) {

  // const displayEmailornot = activeSection === "Sent" ? sentEmails : emails;

  let displayEmailornot;

  if (activeSection === "Sent") {
    displayEmailornot = sentEmails;
  }
  else if (activeSection === "Drafts") {
    displayEmailornot = draftEmails;
  }
  else {
    displayEmailornot = emails;
  }

  if (selectedEmail) {
    return (
      <div className="flex-1 h-screen bg-gray-100 flex justify-center items-center px-2 md:px-4">
        <div className="w-full max-w-[700px] h-auto md:h-[400px] bg-white rounded-lg shadow-lg p-6 relative overflow-y-auto mx-auto">
          <button
            onClick={() => setSelectedEmail(null)}
            className='absolute top-4 left-4 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300'
          >Back </button>
          <h2
            className='text-2xl font-bold mt-10' >
            {selectedEmail.subject}
          </h2>

          <p
            className='text-blue-500 mt-2'>
            From: {selectedEmail.to || selectedEmail.sender}
          </p>

          <p
            className="mt-6 text-gray-700">
            {selectedEmail.message}
          </p>
        </div>

      </div>
    )
  }
  return (
    // <div className="flex-1 bg-white ">
    //   <div className="flex justify-between  border-b">
    //     <p className="p-3 hover:bg-gray-100 cursor-pointer">Primary</p>
    //     <p className="p-3 hover:bg-gray-100 cursor-pointer">Social</p>
    //     <p className="p-3 hover:bg-gray-100 cursor-pointer">Promotions</p>
    //     <p className="p-3 hover:bg-gray-100 cursor-pointer">Updates</p>
    //   </div>

    //   {emails.map((email)=>(
    //     <EmailRow
    //       key={email.id}
    //       sender={email.sender}
    //       subject={email.subject}
    //       message={email.message}
    //       time={email.time}
    //     />
    //   ))}
    // </div>

    <div className="flex-1 w-full h-screen bg-white overflow-y-auto px-2 md:px-4">
      <h2
        className="p-3 font-semibold border-b">
        {activeSection}
      </h2>


      {displayEmailornot.length === 0 ? (
        <p className="p-4 text-gray-500">No Emails</p>
      ) : (
        displayEmailornot.map((email, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setSelectedEmail(email)}
          >
            <EmailRow
              sender={email.to || email.sender}
              subject={email.subject}
              message={email.message}
              time={email.time}
            />
          </div>
        ))
      )}

    </div>
  )
}

export default EmailList


