import React from 'react';

const Sidebar = (props) => {

    const items = [
        {
            name: "Inbox",
            icon: "src/assets/inbox.png"
        },
        {
            name: "Starred",
            icon: "src/assets/star.png"
        },
        {
            name: "Sent",
            icon: "src/assets/sent.png"
        },
        {
            name: "Drafts",
            icon: "src/assets/draft.png"
        },
    ];

    let width;

    if (props.isOpen) {
        width = "w-[270px]"
    } else {
        width = "w-[70px]"
    }

    return (
        <div className={`h-full border-r border-gray-200 px-3 py-3 flex flex-col justify-between ${width} transition-all duration-300`}>


            <div>

                {/* Compose Button */}
                <button
                    className="flex items-center gap-3 bg-[#C2E7FF] h-12 px-5 rounded-md shadow-sm hov mb-4">
                    <img
                        src="src/assets/edit.png"
                        alt="compose"
                        className="w-5 h-5"
                    />
                    {props.isOpen === true ? (
                        <span className="text-sm font-medium">Compose</span>
                    ) : null}
                </button>

                {/* Menu Items */}
                <div className="space-y-1 ">
                    {items.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center  py-1 px-4  rounded-r- cursor-pointer gap-2 hover:bg-gray-100"
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-5 h-5"
                            />
                            {props.isOpen === true ? (
                                <span className="text-sm">{item.name}</span>
                            ) : null}
                        </div>
                    ))}
                </div>

            </div>

            {/* BOTTOM UPGRADE BUTTON */}
            <button className="flex items-center gap-2 p-2 hover:bg-gray-100">

                <div className="h-5 w-5 border-2 border-black rounded-full flex items-center justify-center text-xs">
                    1
                </div>

                {props.isOpen === true ? (
                    <>
                        <span className="text-sm">Upgrade</span>
                        <img src="src/assets/rightArrow.png" alt="arrow" className="w-4" />
                    </>
                ) : null}

            </button>

        </div>
    );
}

export default Sidebar

