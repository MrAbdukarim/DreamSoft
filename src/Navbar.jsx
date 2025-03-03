// import React from "react";
import logo_nav from "../src/assets/images/logo-default-191x52.png";
// import './navbar.css'
// import {HiOutlineShare} from "react-icons/hi";
// import {RiSearch2Line} from "react-icons/ri";
//
//
// function Navbar() {
//     return (
//         <header>
//             {/*<div className="logo"><img src={logo_nav} alt=""/></div>*/}
//             {/*<div className="nav_list">*/}
//             {/*    <ul>*/}
//             {/*        <li><a href="/">Home</a></li>*/}
//             {/*        <li><a href="/">About Us</a></li>*/}
//             {/*        <li><a href="/">Gallery</a></li>*/}
//             {/*        <li><a href="/">Pricing</a></li>*/}
//             {/*        <li><a href="/">Blog</a></li>*/}
//             {/*        <li><a href="/">Contact Us</a></li>*/}
//             {/*    </ul>*/}
//             {/*    <RiSearch2Line/>*/}
//             {/*    <HiOutlineShare/>*/}
//             {/*</div>*/}
//
//             <h1 className="text-3xl font-bold underline bg-sky-100">
//                 Hello world!
//             </h1>
//         </header>
//     )
// }
// export default Navbar;
'use client'

import {useState} from 'react'
import './navbar.css'
import {
    Dialog,
    DialogPanel,
    Popover,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/react/20/solid'


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src={logo_nav}
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src={logo_nav}
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>

                </DialogPanel>
            </Dialog>
        </header>
    )
}

