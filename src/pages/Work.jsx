import React from 'react'
import { Link } from 'react-router-dom'

function Work() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#0a0a0a] px-4">
      <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
        Work Page
      </h1>
      <p className="text-lg sm:text-xl text-white mb-8 text-center">
        This page is under construction. Check back soon!
      </p>
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-400"></div>
      <Link to='/' className=' mt-4 px-5 py-2 bg-yellow-400 rounded-[4px] bg-black font-bold text-black'>Go Back</Link>
    </div>  )
}

export default Work