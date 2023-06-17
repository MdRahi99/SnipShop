import React from 'react';
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Union.png";

const Navbar = () => {
    return (
        <div className="navbar bg-[#1E66FF] px-4 lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link>Link1</Link>
                            <Link>Link1</Link>
                            <Link>Link1</Link>
                        </li>
                    </ul>
                </div>
                <Link className="flex gap-1 items-center">
                    <div className='h-9 w-9 relative bg-white rounded-full flex items-center justify-center p-3'>
                        <img className='absolute left-2' src={logo} alt="" />
                        <img className='absolute left-4' src={logo} alt="" />
                    </div>
                    <h1 className='text-black font-bold'><span className='text-[#2196F3]'>S</span>nip<span className='text-[#4DC1F7]'>S</span>hop</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="form-control flex flex-row relative items-center text-[#BEBEBE]">
                    <input type="text" placeholder="Search SnipShop.com" className="input w-96 h-8 text-xs rounded-2xl" />
                    <AiOutlineSearch className='absolute left-80 text-white font-bold p-2 rounded-2xl w-16 bg-[#4DC3F7] h-8'></AiOutlineSearch>
                </div>
            </div>
            <div className="navbar-end">
                <div className='flex gap-3 items-center'>
                    <div className='flex gap-1 items-center text-white'>
                        <CgProfile></CgProfile>
                        <h1>Account</h1>
                    </div>
                    <div className='flex gap-1 items-center text-white'>
                        <AiOutlineHeart></AiOutlineHeart>
                        <h1>My Items</h1>
                    </div>
                    <div className='flex gap-1 items-center text-white'>
                        <AiFillLock></AiFillLock>
                    </div>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:flex hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link>Link1</Link>
                            <Link>Link1</Link>
                            <Link>Link1</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;