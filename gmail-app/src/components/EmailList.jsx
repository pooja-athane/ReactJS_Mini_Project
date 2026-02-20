import React from 'react'
import EmailRow from './EmailRow';

function EmailList(
  {
    activeSection,
    selectedEmail,
    setSelectedEmail,
    sentEmails
  }
) {
  const emails = [
    {
      id: 1,
      sender: "Amazon",
      subject: "Your order has been shipped",
      message: "Your package will arrive tomorrow.",
      time: "10:30 AM"
    },
    {
      id: 2,
      sender: "Flipkart",
      subject: "Big Sale is Live",
      message: "Don't miss amazing offers today.",
      time: "9:15 AM"
    },
    {
      id: 3,
      sender: "LinkedIn",
      subject: "New Job Alert",
      message: "React Developer job posted.",
      time: "8:40 AM"
    },
    {
      id: 4,
      sender: "Instagram",
      subject: "New Follower",
      message: "Someone started following you.",
      time: "Yesterday"
    },
    {
      id: 5,
      sender: "Swiggy",
      subject: "Food Delivered",
      message: "Your order has been delivered.",
      time: "Yesterday"
    },
    {
      id: 6,
      sender: "Paytm",
      subject: "Cashback Received",
      message: "You received ₹50 cashback.",
      time: "Mon"
    },
    {
      id: 7,
      sender: "GitHub",
      subject: "New Pull Request",
      message: "Someone opened a PR in your repo.",
      time: "Mon"
    },
    {
      id: 8,
      sender: "YouTube",
      subject: "New Video Uploaded",
      message: "Your subscribed channel uploaded a video.",
      time: "Sun"
    },
    {
      id: 9,
      sender: "Zomato",
      subject: "Flat 60% OFF",
      message: "Order now and save big.",
      time: "Sun"
    },
    {
      id: 10,
      sender: "Twitter",
      subject: "New Mention",
      message: "Someone mentioned you in a tweet.",
      time: "Sat"
    },
    {
      id: 11,
      sender: "Amazon",
      subject: "Your order has been shipped",
      message: "Your package will arrive tomorrow.",
      time: "10:30 AM"
    },
    {
      id: 12,
      sender: "Flipkart",
      subject: "Big Sale is Live",
      message: "Don't miss amazing offers today.",
      time: "9:15 AM"
    },
    {
      id: 13,
      sender: "LinkedIn",
      subject: "New Job Alert",
      message: "React Developer job posted.",
      time: "8:40 AM"
    },
    {
      id: 14,
      sender: "Instagram",
      subject: "New Follower",
      message: "Someone started following you.",
      time: "Yesterday"
    },
    {
      id: 15,
      sender: "Swiggy",
      subject: "Food Delivered",
      message: "Your order has been delivered.",
      time: "Yesterday"
    },
    {
      id: 16,
      sender: "Amazon",
      subject: "Your order has been shipped",
      message: "Your package will arrive tomorrow.",
      time: "10:30 AM"
    },
    {
      id: 17,
      sender: "Flipkart",
      subject: "Big Sale is Live",
      message: "Don't miss amazing offers today.",
      time: "9:15 AM"
    },
    {
      id: 18,
      sender: "Instagram",
      subject: "New Follower",
      message: "Someone started following you.",
      time: "Yesterday"
    },
  ];

  const displayEmailornot = activeSection === "Sent" ? sentEmails : emails;

  if (selectedEmail) {
    return (
      <div className="flex-1 h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-[700px] h-[400px] bg-white rounded-lg shadow-lg p-6 relative">

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

    <div className="flex-1 h-screen bg-white overflow-y-auto">
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


