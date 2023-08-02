import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {GrFormAdd} from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Demo = () => {
  return (
    <div className='bg-black text-white min-h-screen h-screen'>
          <div className='md:w-[80%] m-auto w-[90%]  h-full relative flex  pt-10 justify-between'>
              <h1 className='md:text-4xl sm:text-2xl text-xl '>My Notes</h1>
              <div className='max-w-3xl relative '>
                    <input className='md:w-full w-32 sm:w-48 bg-[#363535] py-1 md:py-2 outline-none border-none px-10 rounded-full' type="text" name="" id="" placeholder='Search' />
                    <BiSearch className='absolute left-2 top-[1.1rem] md:top-5 -translate-y-1/2 text-xl  sm:text-2xl text-[#d7d6d6]'/>
              </div>
              <button className='bg-white absolute bottom-4 text-[#d7d6d6] right-10'>
                    <Link to={'/update'}>
                         <GrFormAdd className=' text-xl sm:text-2xl md:text-4xl '/>  
                    </Link>
              </button>
          </div>
    </div>
  )
}

export default Demo