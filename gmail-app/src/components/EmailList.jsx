import React from 'react'
import EmailRow from './EmailRow';

function EmailList() {
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
  ];
  return (
    <div className="flex-1 bg-white ">
      <div className="flex justify-between  border-b">
        <p className="p-3 hover:bg-gray-100 cursor-pointer">Primary</p>
        <p className="p-3 hover:bg-gray-100 cursor-pointer">Social</p>
        <p className="p-3 hover:bg-gray-100 cursor-pointer">Promotions</p>
        <p className="p-3 hover:bg-gray-100 cursor-pointer">Updates</p>
      </div>

      {emails.map((email)=>(
        <EmailRow
          key={email.id}
          sender={email.sender}
          subject={email.subject}
          message={email.message}
          time={email.time}
        />
      ))}
    </div>
  )
}

export default EmailList


