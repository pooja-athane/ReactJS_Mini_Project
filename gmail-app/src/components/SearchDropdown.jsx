import React from "react";

function SearchDropdown({ filteredEmails, searchText, handleSelectedEmail }) {

  if (searchText.trim() === "") {
    return null;
  }

 
  function highlightText(text, searchText) {
    if (!searchText) return text;

    const regex = new RegExp(`(${searchText})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <span key={index} className="bg-yellow-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 max-h-64 overflow-y-auto z-50 border">
      {filteredEmails.length === 0 ? (
        <div className="p-4 text-gray-500 text-sm">No results found</div>
      ) : (
        filteredEmails.map((email) => (
          <div
            key={email.id} 
            onClick={() => handleSelectedEmail(email)}
            className="p-3 border-b cursor-pointer hover:bg-gray-100"
          >
            <p className="font-semibold text-sm">
              {highlightText(email.subject, searchText)}
            </p>
            <p className="text-xs text-gray-600 truncate">
              {highlightText(email.message, searchText)}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchDropdown;