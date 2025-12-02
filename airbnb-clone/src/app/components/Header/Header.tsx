"use client";

import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="page-wrapper w-full border-b bg-white">
      
      {/* Header */}

      <div className="hidden md:flex container mx-auto h-16 items-center justify-between px-6">
        
        {/* Logo desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <Image src="/images/logo-m.png" alt="Logo" width={100} height={40}/>
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
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-4">
            <li className="hidden lg:flex gap-4">
              <Link href="/">Torne-se um anfitrião</Link>
            </li>
            <li>
              <Link href="/">
                <GlobeAltIcon className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link href="/">									 
                <Bars3Icon className="h-5 w-5 p-3" />
              </Link>
            </li>						   
          </ul>
        </nav>
      </div>

      {/* Search bar para desktop/tablet */}
      <div className="hidden md:flex container mx-auto px-6 py-4 justify-center">    
        <SearchBar />
      </div>

      




      {/* MOBILE <640px */}                   {/* CERTO */}
      <div className="flex md:hidden px-6 py-4 flex-col gap-4"> 

        {/* Logo mobile */}                       {/* CERTO */}                              
        <div className="hidden sm:flex lg:hidden">
          <Image src="/images/icon-p.png" alt="Logo" width={40} height={40}/>
        </div>     

        {/* Search Bar (mobile) */}                           {/* CERTO */}
        <div className="flex md:hidden justify-center">
          <SearchBar />
        </div>

        {/* Menu central abaixo da Search Bar*/}                             {/* CERTO */}  
        <nav className="flex md:hidden justify-center border-b pb-3 pt-2">
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
