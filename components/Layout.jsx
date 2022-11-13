import React from 'react'
import Link from 'next/link'
import BS from './BS'
const Layout = ({children}) => {
  return (
    <>
        <nav className='p-10 flex justify-end gap-x-14 bg-white'>
            <Link href='/'><BS>Home</BS></Link>
            <Link href='/GLogin'><BS>Government Login</BS></Link>
            <Link href='/GLogin'><BS>Listings</BS></Link>
            <a href='#FAQ'><BS>FAQ</BS></a>
        </nav>
        <main className='min-h-screen w-[80vw] py-10 flex flex-col gap-y-10 bg-white mx-auto'>
            {children}
        </main>
        <footer className='flex justify-center items-center py-14 text-white bg-black rounded-t-full'>
            <h2>Developed by <b>Naman</b> & <b>Shubh</b></h2>
        </footer>  
    </>
  )
}

export default Layout