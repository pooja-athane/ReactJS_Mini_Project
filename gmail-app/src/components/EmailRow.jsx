function EmailRow({ sender, subject, message, time }) {
  return (
    <div className="flex items-center p-2 text-sm font-medium border-b hover:shadow-sm cursor-pointer">

      <input type="checkbox"
       onClick={(e) => e.stopPropagation()} />

      <p className="ml-3 font-bold w-40">{sender}</p>

      <p className="flex-1 text-gray-600">
        <span className="font-semibold">{subject}</span> - {message}
      </p>

      <p className="text-sm text-black-500">{time}</p>

    </div>
  )
}

export default EmailRow
