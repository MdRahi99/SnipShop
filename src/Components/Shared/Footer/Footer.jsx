import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Union2.png";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";
import { AiOutlineCopyright } from "@react-icons/all-files/ai/AiOutlineCopyright";
import image from "../../../Assets/Vector 2.png";

const Footer = () => {
    return (
        <div className='relative'>
            <div>
                <footer className="footer py-10 justify-between bg-[#175095] text-white lg:px-24 px-4">
                    <div>
                        <span className="text-2xl font-semibold mb-4">Shop</span>
                        <Link className="link link-hover">Gift Cards</Link>
                        <Link className="link link-hover">SnipShop blog</Link>
                    </div>
                    <div>
                        <span className="text-2xl font-semibold mb-4">Sell</span>
                        <Link className="link link-hover">Sell on SnipShop</Link>
                        <Link className="link link-hover">Terms</Link>
                        <Link className="link link-hover">Forums</Link>
                        <Link className="link link-hover">Affiliates</Link>
                    </div>
                    <div>
                        <span className="text-2xl font-semibold mb-4">About</span>
                        <Link className="link link-hover">SnipShop, Inc.</Link>
                        <Link className="link link-hover">Policies</Link>
                        <Link className="link link-hover">Investors</Link>
                        <Link className="link link-hover">Careers</Link>
                        <Link className="link link-hover">Press</Link>
                        <Link className="link link-hover">Impact</Link>
                    </div>
                    <div>
                        <span className="text-2xl font-semibold mb-4">Help</span>
                        <Link className="link link-hover">Help center</Link>
                        <Link className="link link-hover">Trust and safety</Link>
                        <Link className="link link-hover">Privacy settings</Link>
                        <Link className="flex gap-2 border-2 rounded-full border-white p-2 items-center my-4">
                            <div className='h-6 w-6 relative bg-white rounded-full flex items-center justify-center p-3'>
                                <img className='absolute left-1' src={logo} alt="" />
                                <img className='absolute left-3' src={logo} alt="" />
                            </div>
                            <h1 className='text-sm font-bold'>Download the SnipShop App</h1>
                        </Link>
                        <div className="grid grid-flow-col gap-4 text-xl">
                            <FaInstagram></FaInstagram>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaDribbble></FaDribbble>
                            <FaPinterest></FaPinterest>
                        </div>
                    </div>
                </footer>
                <footer className="footer justify-between items-center px-4 lg:px-24 py-4 bg-[#232347] text-white">
                    <div className="items-center grid-flow-col">
                        <AiOutlineCopyright></AiOutlineCopyright>
                        <p>2021-2023 SnipShop.com</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <Link className="link link-hover">Terms of use</Link>
                            <Link className="link link-hover">Privacy</Link>
                            <Link className="link link-hover">Interest-based ads</Link>
                        </div>
                    </div>
                </footer>
                <img className='hidden lg:flex absolute top-0 left-0' src={image} alt="" />
            </div>
        </div>
    );
};

export default Footer;