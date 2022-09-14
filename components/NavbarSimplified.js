import React from 'react'
import Link from 'next/link'

function NavbarSimplified() {
    
    return (
        // TODO: Responsive (Breakpoint pakai hamburger icon) + Fixed Content
        <>
            <div className="px-16 py-8 bg-white border-b-4">
                <div className="container mx-auto font-Josefin">
                    <div className="flex items-center">
                        <div className="w-6/12 text-3xl font-semibold">
                            <Link href="/">
                                Open House.
                            </Link>
                        </div>
                        <div className="w-6/12 text-right">
                            <Link href="/">
                                <a className="border-2 border-blue-500 text-blue-500 py-2 px-10 hover:bg-blue-500 hover:text-white rounded-full text-bold">Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarSimplified;