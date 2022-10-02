import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoOH from "../Assets/Logo/logoOH.png"

const scrollToEvents = () => {
  const events = document.getElementById("events");
  events.scrollIntoView({ behavior: "smooth" });
}

const scrollToDepartement = () => {
  const departement = document.getElementById("funfact");
  departement.scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  return (
    // TODO: Responsive (Breakpoint pakai hamburger icon) + Fixed Content
    <>
    <main className="overflow-x-hidden">
      <div className="px-4 sm:px-6 md:px-16 py-2 bg-white border-b-2 md:border-b-4">
        <div className="md:container mx-auto font-Josefin">
          <div className="flex items-center">
            <div className="w-3/12 md:3/12">
              <Link href="/">
                <Image src={logoOH} alt="logo" width="80" height="80" /> 
              </Link>
            </div>
            <div className="w-6/12">
              <ul className="flex justify-center space-x-10 lg:space-x-14 2xl:space-x-20 invisible md:visible">
                    <li>
                      <a className="hover:text-blue-500 font-medium text-xl cursor-pointer"
                      onClick={() => {
                        scrollToEvents();
                      }}>
                      Events
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-blue-500 font-medium text-xl cursor-pointer"
                      onClick={() => {
                        scrollToDepartement();
                      }}
                    >
                      Departement
                      </a>
                    </li>
              </ul>
            </div>
            <div className="w-5/12 md:w-3/12 text-right">
              <Link href="/faq">
                <a className="border-2 border-blue-500 text-lg md:text-xl text-blue-500 py-1.5 sm:py-2 px-6 sm:px-10 hover:bg-blue-500 hover:text-white rounded-full">
                  FAQ
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}

export default Navbar;
