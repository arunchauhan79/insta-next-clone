'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const Header = () => {
    const { data: session } = useSession()
    return (
        <div className='shadow-sm border-b sticky top-0 bg-white p-3 z-30' >
            <div className="flex justify-between items-center p-4 h-10">
                <Link href="/">
                    <Image className='hidden lg:inline-flex' src="/logo.png" alt="logo" width={50} height={50} />
                    <Image className='inline-flex lg:hidden ' src="/logo2.png" alt="logo" width={96} height={96} />
                </Link>
                <input type="text" placeholder="Search" className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]" />
                {session ? (<div className='flex gap-3'><img className='border border-red-600 rounded-full' src={session?.user?.image} width={40} height={40} /> <button className='text-sm text-blue-800' onClick={() => signOut()}>Log out</button></div>) : <button className='text-sm font-bold' onClick={() => signIn()}>Log In</button>}

            </div>
        </div>
    )
}

export default Header