import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='shadow-sm border-b sticky top-0 bg-white p-3 z-30' >
            <div className="flex justify-between items-center p-4 h-10">
                <Link href="/">
                    <Image className='hidden lg:inline-flex' src="/logo.png" alt="logo" width={50} height={50} />
                    <Image className='inline-flex lg:hidden ' src="/logo2.png" alt="logo" width={96} height={96} />
                </Link>
                <input type="text" placeholder="Search" className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]" />
                <button className='text-sm'>Log In</button>
            </div>
        </div>
    )
}

export default Header