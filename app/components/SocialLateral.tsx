'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


const menuSocials = [
  { name: 'instagram', path: 'https://www.instagram.com/clem.vrrd/?next=%2F', icon: <FaInstagramSquare /> },
  { name: 'linkedin', path: 'https://www.linkedin.com/in/clément-verdoire-088505259/', icon: <FaLinkedin /> },
  { name: 'github', path: 'https://github.com/cLemzZz5', icon: <FaGithubSquare /> }
]


const SocialLateral = () => {
  return (
    <aside className="hidden w-10 lg:flex flex-col justify-center items-center absolute h-full right-0 text-cinza dark:text-white">
      <ul className="space-y-2 line before:right-2.5 after:right-2.5  before:bg-blue dark:before:bg-branco after:bg-blue dark:after:bg-branco">
        {menuSocials.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="relative group hover:bg-lightBlue hover:text-cinza rounded"
          >

            <Link href={item.path} aria-label={`Ir para ${item.name}`} className='uppercase text-2xl gap-4'>
              {item.icon}
            </Link>
          </motion.li>
        ))}
      </ul>
    </aside>
  )
}

export default SocialLateral