import React from 'react'
import {motion} from 'framer-motion'


const BS = ({children}) => {
  return (
    <motion.h6 whileHover={{scale:1.3,borderRadius:"10%",rotate:-3}} className="px-5 py-2 
     place-here
     hover:bg-primary hover:text-white
    " whileTap={{scale:1}} >
      {children}
    </motion.h6>
  )
}
// ADD GRADIENT IN NAV....simply copy below code and place it at place-here
// hover:bg-gradient-to-tr from-red-300 to-blue-300 hover:text-black
export default BS