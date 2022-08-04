import React from "react";
import NavItems from "./NavItems";

function Navbar() {
    return (
        // TODO: Responsive (Breakpoint pakai hamburger icon) + Fixed Content
        <>
            <div className="px-16 py-8 bg-white">
                <div className="container mx-auto font-Josefin">
                    <div className="flex items-center">
                        <div className="w-3/12 text-3xl font-semibold">
                            Open House.
                        </div>
                        <div className="w-6/12">
                            <ul className="flex justify-center space-x-10">
                                <NavItems>Facility</NavItems>
                                <NavItems>Departement</NavItems>
                            </ul>
                        </div>
                        <div className="w-3/12 text-center">
                            <a className="border-2 border-blue-500 text-blue-500 py-2 px-10 rounded-full text-bold"> FAQ </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;