"use client";

import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    
    <header className="page-wrapper w-full border-b bg-white border-gray-200 shadow-sm">            
      <div className="hidden md:flex container mx-auto h-16 items-center justify-between px-6">

        {/* Logo desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Image 
            src="/images/logo-m.png" 
            alt="Logo" 
            width={100} 
            height={40}
          />
        </div>

        {/* Menu central */}						   
        <nav>
          <ul className="hidden md:flex justify-center gap-6 text-sm font-medium">
            <li><Link href="/">Acomodações</Link></li>
            <li><Link href="/">Experiências</Link></li>
            <li><Link href="/">Serviços</Link></li>
          </ul>
        </nav>

        {/* Right buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <Link href="/">Torne-se um anfitrião</Link>
          </div>
          <Link href="/" className="rounded-full p-2 hover:bg-gray-100">
            <GlobeAltIcon className="h-5 w-5" />
          </Link>
          <Link href="/" className="rounded-full p-2 hover:bg-gray-100">
            <Bars3Icon className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Search bar para desktop/tablet */}
      <div className="hidden md:flex container mx-auto px-6 py-4 justify-center">    
        <SearchBar />        
      </div>          

      {/* Mobile*/}                   
      <div className="flex flex-col px-6 py-4 gap-4 md:hidden"> 

        {/* Logo mobile */}                                                   
        <div className="flex justify-between items-center ">
          <div className="hidden sm:flex lg:hidden">
          <Image src="/images/icon-p.png" alt="Logo" width={40} height={40}/>
        </div> 
        <nav>
          <ul className="hidden sm:flex justify-center gap-6 text-sm font-medium">
            <li><Link href="/">Acomodações</Link></li>
            <li><Link href="/">Experiências</Link></li>
            <li><Link href="/">Serviços</Link></li>
          </ul>
        </nav> 
        </div>

        {/* Search Bar (mobile) */}                           
        <div className="flex md:hidden justify-center">
          <SearchBar />
        </div>

        {/* Menu central abaixo da Search Bar*/}                              
        <nav className="flex sm:hidden justify-center border-b pb-3 pt-2">
          <ul className="flex justify-center gap-6 text-sm font-medium">
            <li><Link href="/">Acomodações</Link></li>
            <li><Link href="/">Experiências</Link></li>
            <li><Link href="/">Serviços</Link></li>
          </ul>
        </nav>
      </div>

    </header>
  );
}
