import type { NextPage } from 'next'
import Head from 'next/head'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import {FAQ,LoginForm,SignUpForm } from '../components'
import { useState } from 'react'

const Home: NextPage = () => {
  const  [Login,setLogin] = useState(false)
  const  [SignUp,setSignUp] = useState(false)
  const handleLogin = () => {
    setLogin(!Login)
  }
  const handleSignUp = () => {
    setSignUp(!SignUp)
  }
  
  return (
    <>
      <Head>
        <title>BlockLand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div viewport={{ once: true }} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} >
        <div className='flex flex-col items-start justify-center p-32 bg-orange-100 border-8 border-x-primary border-y-secondary rounded-full'>
               <h1 className='pb-5 text-7xl font-bold'>Land Registry Application</h1>
               <div>
                <Typewriter
                loop={true}
                cursorColor="#fff"
                words={["Trustable, Transparent and Digitized Platform",
                "Open for all! Register Now."]}
                />
                </div>
        </div>
      </motion.div>
    <div className='flex justify-center gap-5'>
        <button className='py-10 rounded-2xl text-white bg-secondary px-20' onClick={handleLogin}>
           <h1>Login</h1>
        </button>
        
        <button className='py-10 rounded-2xl  border-secondary px-20 border-2 text-secondary' onClick={handleSignUp}>
          <h1>Sign Up</h1>
        </button>
    </div>
    {Login && <LoginForm Login={Login} setLogin={setLogin}/>}
    {SignUp && <SignUpForm SignUp={SignUp} setSignUp={setSignUp}/>}
    <FAQ />
    </>
  )
}

export default Home
