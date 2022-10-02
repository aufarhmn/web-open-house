import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logoOH from "../Assets/Logo/logoOH.jpg"

function NavbarSimplified() {
    
    return (
        // TODO: Responsive (Breakpoint pakai hamburger icon) + Fixed Content
        <>
            <div className="overflow-x-hidden">
                <div className="px-4 sm:px-6 md:px-16 py-2 bg-white border-b-2 md:border-b-4">
                    <div className="md:container mx-auto font-Josefin">
                        <div className="flex items-center">
                            <div className="w-6/12">
                                <Link href="/">
                                    <Image 
                                        src={logoOH} 
                                        alt="logo" 
                                        width="80" 
                                        height="80" 
                                    />
                                </Link>
                            </div>
                            <div className="w-6/12 text-right">
                                <Link href="/">
                                    <a className="border-2 border-blue-500 text-lg md:text-xl text-blue-500 py-1.5 sm:py-2 px-6 sm:px-10 hover:bg-blue-500 hover:text-white rounded-full">
                                        Home
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarSimplified;