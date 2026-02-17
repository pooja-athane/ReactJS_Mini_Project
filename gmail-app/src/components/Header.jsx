import React from 'react'



function Header(props) {
  return (
    <header className=" grid grid-cols-[270px_auto_170px] border-b border-gray-300 h-[90px] items-center">
     

      {/* LEFT */}
      <div className="flex items-center gap-4 pl-4">
        <img
          src="src/assets/menu_logo.png"
          alt="menu"
          className=" cursor-pointer"
          onClick={props.toggleSidebar}
        />
        <img
          src="src/assets/gmail_logo.png"
          alt="gmail"
          className="h-[35px] cursor-pointer"
          
        />
      </div>

      {/* CENTER */}
      <div className="flex items-center bg-[#EAF1FB] px-4 py-3 rounded-full max-w-[720px] w-full">
        <img src="src/assets/search.png" alt="search" className="mr-3 cursor-pointer " />
        <input
          type="text"
          placeholder="Search mail"
          className="bg-transparent outline-none w-full text-base  "
        />
        <img
          src="src/assets/show_options.png"
          alt="filter"
          className="w-5 ml-3 cursor-pointer"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-end gap-4 pr-4">
        <img src="src/assets/help.png" alt="help" className="cursor-pointer w-6" />
        <img src="src/assets/setting.png" alt="settings" className="cursor-pointer w-6" />
        <img src="src/assets/gemini.png" alt="settings" className="cursor-pointer w-5" />
        <img src="src/assets/apps.png" alt="apps" className="cursor-pointer w-6"  />

        <div className=" shrink-0 h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
          P
        </div>
      </div>
    </header>
  )
}

export default Header
