"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  let pathname = usePathname();
  console.log(pathname);
  
  return (
    <div>
       <nav className="px-4 py-3 bg-cyan-700 text-white fixed top-0 right-0 left-0 flex justify-between">
      <Link href="/" className="logo">Logo</Link >
      <ul className="flex gap-4">
        <li> <Link className={pathname == '/' ? "active" :""} href='/' >Home</Link>  </li>
        <li> <Link className={pathname == '/about' ? "active" :""} href='/about' >About</Link> </li>
        <li> <Link className={pathname == '/contact' ? "active" :""} href='/contact' >Contact</Link> </li>
        <li> <Link className={pathname == '/gallary' ? "active" :""} href='/gallary' >Gallery</Link> </li>
        <li> <Link className={pathname == '/signup' ? "active" :""} href='/signup' >Link</Link> </li>
      </ul>
    </nav>


    
    </div>
  )
}
