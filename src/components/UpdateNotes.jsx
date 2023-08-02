import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const UpdateNotes = () => {
  return (
    <div className='bg-black text-white min-h-screen h-screen'>
          <div className='md:w-[80%] m-auto w-[90%]  h-full relative'>
              <div className=' flex  pt-10 justify-between'>
                 <Link to={'/'}>
                     <button  className='bg-[#363535] px-3 rounded-full py-1 w-fit '><MdOutlineKeyboardArrowLeft className='text-2xl'/></button>
                 </Link>
                 <button  className='bg-[#363535] px-3 rounded-full py-1 w-fit '>Save</button>
                 <button  className='bg-[#363535] px-5 rounded-full  w-fit '><BsFillTrashFill/></button>
              </div>
              <div className='mt-20 max-w-md space-y-10'>
                     <input className='md:w-full w-36 sm:w-48 bg-[#363535] py-1 md:py-2 outline-none border-none px-4 rounded-lg' type="text" name="" id="" placeholder='Title' />
                     <textarea className='bg-[#363535] p-3 outline-none rounded-lg w-full' name="message" id="" rows="10" placeholder='Description'></textarea>
              </div>
          </div>
    </div>
  )
}

export default UpdateNotes