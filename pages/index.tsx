import type { NextPage } from 'next'
import Head from 'next/head'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import {FAQ,LoginForm,SignUpForm } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockLand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div viewport={{ once: true }} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} >
        <div className='flex flex-col items-start justify-center p-32 bg-orange-100 border-8 border-x-primary border-y-secondary rounded-full'>
               <h1 className='pb-5 text-7xl font-bold'>Land Registry Application</h1>
               <div className='h-[1x0vh]'>
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
        <button className='py-10 rounded-2xl text-white bg-secondary px-20'>
           <h1>Login</h1>
        </button>
        
        <button className='py-10 rounded-2xl  border-secondary px-20 border-2 text-secondary'>
          <h1>Sign Up</h1>
        </button>
    </div>
    <FAQ />
    </>
  )
}

export default Home
