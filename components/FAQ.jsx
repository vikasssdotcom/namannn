import React from 'react'
import {motion} from 'framer-motion'

const show  = {opacity:1,scale:1}
const hide = {opacity:0,scale:0.5}
const time =  {duration:1}
const FAQ = () => {
  return (
    <>
        <motion.h1 viewport={{ once: true }} id="FAQ" initial={hide} whileInView={show} className='text-center' transition={time}>FAQ section</motion.h1>
        
          <motion.h2 viewport={{ once: true }} initial={hide} whileInView={show} transition={time}>What is it ⁉</motion.h2>
          <motion.p viewport={{ once: true }} transition={time} initial={hide} whileInView={show} >Developed a decentralized application using Blockchain which could overcome the short-comings of the existing process of land registry. Through Blockchain, it is possible to keep track of how property changes hand to hand. For buyers, sellers and Government registrars, it is easier to transfer the land ownership from a seller to a new buyer without any intermediaries. It provides immutability, auditability, traceability, and anonymity features which attracts the people around the globe to implement its decentralization feature in the land registry process. It also accelerates the process of registration and provides transparency to the system.</motion.p>
          <motion.h2 initial={hide} viewport={{ once: true }} whileInView={show} transition={time}>Demo Q2 ⁉</motion.h2>
          <motion.p viewport={{ once: true }} transition={time} initial={hide} whileInView={show} >Developed a decentralized application using Blockchain which could overcome the short-comings of the existing process of land registry. Through Blockchain, it is possible to keep track of how property changes hand to hand. For buyers, sellers and Government registrars, it is easier to transfer the land ownership from a seller to a new buyer without any intermediaries. It provides immutability, auditability, traceability, and anonymity features which attracts the people around the globe to implement its decentralization feature in the land registry process. It also accelerates the process of registration and provides transparency to the system.</motion.p>
          <motion.h2 viewport={{ once: true }} initial={hide} whileInView={show} transition={time}>Demo Q3 ⁉</motion.h2>
          <motion.p viewport={{ once: true }} transition={time} initial={hide} whileInView={show} >Developed a decentralized application using Blockchain which could overcome the short-comings of the existing process of land registry. Through Blockchain, it is possible to keep track of how property changes hand to hand. For buyers, sellers and Government registrars, it is easier to transfer the land ownership from a seller to a new buyer without any intermediaries. It provides immutability, auditability, traceability, and anonymity features which attracts the people around the globe to implement its decentralization feature in the land registry process. It also accelerates the process of registration and provides transparency to the system.</motion.p>
        
    </>
  )
}

export default FAQ