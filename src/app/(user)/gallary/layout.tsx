import Link from 'next/link'
import React from 'react'

export default function GalleryLayout({children}:any) {
  return (
    <div>

        <nav className='flex w-1/4 m-auto justify-between'>
        <li><Link href="/">Gallary</Link></li>
        <li><Link href="/gallary/web">Web</Link></li>
        <li><Link href="/gallary/tab">Mobile</Link></li>
        </nav>
      {children}
    </div>
  )
}
