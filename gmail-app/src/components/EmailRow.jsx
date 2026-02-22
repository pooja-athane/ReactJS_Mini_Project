function EmailRow({ sender, subject, message, time }) {
  return (
    <div className="flex items-center p-3 text-sm border-b hover:bg-gray-100 cursor-pointer w-full">

      <input
        type="checkbox"
        onClick={(e) => e.stopPropagation()}
      />

      <p className="ml-3 font-bold w-24 md:w-40 truncate">
        {sender}
      </p>

      <p className="flex-1 text-gray-600 truncate">
        <span className="font-semibold">{subject}</span> - {message}
      </p>

      <p className="text-xs md:text-sm ml-2 whitespace-nowrap">
        {time}
      </p>

    </div>
  )
}

export default EmailRow
