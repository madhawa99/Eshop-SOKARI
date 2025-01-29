import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

  return (
    <div className="w-full h-[80px] bg-[#001F3F] shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4"
          style={{background: "linear-gradient(to right, rgba(0, 31, 63, 0.1), rgba(0, 63, 95, 0.3))"}}
    >
      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dw6fhh2l4/image/upload/v1737574280/SOKARI_p4fjln.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="flex items-center mr-4">
            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader