import React, { useEffect, useState } from 'react';
import { emails } from '../constants/emails';
import SearchDropdown from './SearchDropdown';

function Header({ toggleSidebar, setSelectedEmail }) {

  const [searchText, setSearchText] = useState("");
  const [filteredEmails, setFilteredEmails] = useState([]);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredEmails([]);
      return;
    }

    const query = searchText.toLowerCase();

    const result = emails.filter((email) =>
      email.subject.toLowerCase().includes(query) ||
      email.message.toLowerCase().includes(query)
    );

    setFilteredEmails(result);
  }, [searchText]);

  const handleSelectedEmail = (email) => {
    setSelectedEmail(email);
    setSearchText("");
  };

  return (
    <header className="border-b border-gray-300 bg-white">

      {/* TOP SECTION */}
      <div className="flex items-center justify-between px-4 py-3 md:h-[80px]">

        {/* LEFT */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src="src/assets/menu_logo.png"
            alt="menu"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
          <img
            src="src/assets/gmail_logo.png"
            alt="gmail"
            className="h-[30px] md:h-[35px]"
          />
        </div>

        {/* SEARCH - Desktop */}
        <div className="hidden md:flex relative items-center bg-[#EAF1FB] px-4 py-2 rounded-full 
                w-full max-w-[550px] mx-4">
          <img src="src/assets/search.png" className="mr-3 cursor-pointer" />
          <input
            type="text"
            placeholder="Search mail"
            className="bg-transparent outline-none w-full text-base"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img
            src="src/assets/show_options.png"
            className="w-5 ml-3 cursor-pointer"
          />
          <SearchDropdown
            filteredEmails={filteredEmails}
            searchText={searchText}
            handleSelectedEmail={handleSelectedEmail}
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src="src/assets/help.png" className="cursor-pointer w-5 md:w-6 hidden sm:block" />
          <img src="src/assets/setting.png" className="cursor-pointer w-5 md:w-6 hidden sm:block" />
          <img src="src/assets/gemini.png" className="cursor-pointer w-5 hidden sm:block" />
          <img src="src/assets/apps.png" className="cursor-pointer w-5 md:w-6 hidden sm:block" />
          <div className="h-9 w-9 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
            P
          </div>
        </div>

      </div>

      {/* SEARCH - Mobile */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative flex items-center bg-[#EAF1FB] px-4 py-3 rounded-full w-full">
          <img src="src/assets/search.png" className="mr-3 cursor-pointer" />
          <input
            type="text"
            placeholder="Search mail"
            className="bg-transparent outline-none w-full text-base"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchDropdown
            filteredEmails={filteredEmails}
            searchText={searchText}
            handleSelectedEmail={handleSelectedEmail}
          />
        </div>
      </div>

    </header>
  );
}

export default Header;