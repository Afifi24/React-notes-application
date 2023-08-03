import React,{useContext} from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Context } from '../contextAPI/ContextNote'

const UpdateNotes = () => {
  const {Handlechange,state,notes,Handleclick,updatenode} = useContext(Context)

  return (
    <div className='bg-black text-white min-h-screen font-Raleway '>
          <div className='md:w-[80%] m-auto w-[90%]  h-full relative'>
              <div className=' flex  pt-3 justify-between'>
                 <Link to={'/'}>
                     <button  className='bg-blue-500 px-3 rounded-full py-1 w-fit '><MdOutlineKeyboardArrowLeft className='text-2xl '/></button>
                 </Link>
              </div>
              <div className='mt-20 flex  items-center justify-center '>
                     <form className='flex w-[90%] sm:w-[80%] md:w-1/2 mb-10 items-center flex-col space-y-10'>
                           <div className='w-full'>
                                 <input onChange={Handlechange} required value={state.title } className=' bg-[#363535] py-1 md:py-2 outline-none border-none px-4 w-full rounded-lg' type="text" name="title" id="" placeholder='Title' />
                           </div>
                           <textarea onChange={Handlechange} required value={state.description } className='bg-[#363535] p-3 outline-none rounded-lg w-full ' name="description" id="" rows="10" placeholder='Description'></textarea>
                           <button type='submit' onClick={Handleclick} className='bg-[#363535] duration-200 hover:bg-lime-400 text-white px-3 rounded-full py-2 w-full '>Save</button>
                     </form>
                     
              </div>
          </div>
    </div>
  )
}

export default UpdateNotes