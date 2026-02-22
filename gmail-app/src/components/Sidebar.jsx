import React from 'react';

const Sidebar = ({
  isOpen,
  toggleSidebar,
  activeSection,
  setactiveSection,
  setSelectedEmail,
  setShowCompose
}) => {

  const items = [
    { name: "Inbox", icon: "src/assets/inbox.png" },
    { name: "Sent", icon: "src/assets/sent.png" },
    { name: "Drafts", icon: "src/assets/draft.png" },
  ];

  function handleClick(name) {
    setactiveSection(name);
    setSelectedEmail(null);

    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={` fixed md:relative top-0 left-0 h-full  bg-white  border-r border-gray-200 px-3 py-3 flex flex-col justify-between transition-all duration-300 z-50
          
          ${isOpen ? "w-[240px]" : "w-[90px]"}
          
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >

        <div>
          {/* Compose */}
          <button
            className="flex items-center gap-3 bg-[#C2E7FF] h-12 px-4 rounded-md shadow-sm mb-4 "
            onClick={() => setShowCompose(true)}
          >
            <img src="src/assets/edit.png" className="w-5 h-5" />
            {isOpen && <span className="text-sm font-medium">Compose</span>}
          </button>

          {/* Menu Items */}
          <div className="space-y-1">
            {items.map((item) => (
              <div
                key={item.name}
                onClick={() => handleClick(item.name)}
                className={`flex items-center py-2 px-3 rounded-r-full cursor-pointer gap-2
                ${activeSection === item.name
                    ? "bg-blue-100 font-medium"
                    : "hover:bg-gray-200"
                  }`}
              >
                <img src={item.icon} className="w-5 h-5" />
                {isOpen && <span className="text-sm">{item.name}</span>}
              </div>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 p-2 hover:bg-gray-100">
          <div className="h-5 w-5 border-2 border-black rounded-full flex items-center justify-center text-xs">
            1
          </div>
          {isOpen && <span className="text-sm">Upgrade</span>}
        </button>

      </div>
    </>
  );
};

export default Sidebar;

    


