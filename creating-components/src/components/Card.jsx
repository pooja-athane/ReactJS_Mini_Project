import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Card({data}) {
    return (
        <div className=" relative shrink-0  w-60 h-70 bg-zinc-900/90 rounded-[45px]  text-white py-10 px-8 overflow-hidden">
            <FaFileAlt />
            <p className='text-sm leading-tight  mt-5 font-semibold'>{data.desc}</p>
            <div className="footer absolute bottom-0  w-full left-0  ">
                <div className="flex items-center justify-between mb-3 px-8 py-3">
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>
                        {data.close ? <IoClose /> : <FiDownload size="0.7em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag?.isOpen ? (
                        <div className={`tag  text-white w-full py-4 bg-${data.tag.tagcolor}-600 text-center `}>
                            <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
                        </div>
                    ) : null
                }

            </div>

        </div>
    )
}

export default Card
