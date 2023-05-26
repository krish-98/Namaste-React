import { useState } from "react"
import logo2 from "../assets/logo2.png"
import { FaHamburger } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { RiShoppingCart2Fill } from "react-icons/ri"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggler = () => {
    setToggle(!toggle)
  }
  return (
    <>
      {/* Mobile Navbar */}
      <header className="relative bg-[#f26434] lg:hidden">
        <img className="h-20 object-contain " src={logo2} alt="logo" />
        <div className="absolute top-3 right-4">
          {!toggle ? (
            <FaHamburger
              onClick={handleToggler}
              className="w-8 h-12 fill-white"
            />
          ) : (
            <>
              <ImCross
                onClick={handleToggler}
                className="w-8 h-12 fill-white"
              />
            </>
          )}
        </div>

        {toggle && (
          <ul className="bg-[#f26434] flex flex-col items-center gap-3 tracking-widest uppercase pb-4 text-white">
            <li
              onClick={handleToggler}
              className="hover:bg-[#f9bca8] w-full text-center py-2"
            >
              Home
            </li>
            <li
              onClick={handleToggler}
              className="hover:bg-[#f9bca8] w-full text-center py-2"
            >
              Menu
            </li>
            <li
              onClick={handleToggler}
              className="hover:bg-[#f9bca8] w-full text-center py-2"
            >
              About
            </li>
            <li
              onClick={handleToggler}
              className="hover:bg-[#f9bca8] w-full text-center py-2"
            >
              Contact
            </li>
            <li
              onClick={handleToggler}
              className="hover:bg-[#f9bca8] w-full text-center py-2"
            >
              Cart
            </li>
          </ul>
        )}
      </header>

      {/* Desktop Navbar */}
      <header className="hidden lg:flex justify-between items-center bg-[#f26434] pr-12 xl:pr-36">
        <img className="h-20 cursor-pointer xl:ml-28" src={logo2} alt="logo" />

        <ul className="flex gap-10 text-white font-medium uppercase tracking-wider">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>

          <RiShoppingCart2Fill className="w-6 h-6 fill-white cursor-pointer" />
        </ul>
      </header>
    </>
  )
}
export default Header
