import React,{useContext} from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Context } from '../contextAPI/ContextNote'

const UpdateNotes = () => {
  const {Handlechange,state,notes,Handleclick,updatenode} = useContext(Context)

  return (
    <div className='bg-black text-white min-h-screen  '>
          <div className='md:w-[80%] m-auto w-[90%]  h-full relative'>
              <div className=' flex  pt-10 justify-between'>
                 <Link to={'/'}>
                     <button  className='bg-blue-500 px-3 rounded-full py-1 w-fit '><MdOutlineKeyboardArrowLeft className='text-2xl '/></button>
                 </Link>
                     
                 {/* <button  className='hover:bg-[#363535] px-5 bg-white rounded-full  w-fit '><BsFillTrashFill className='text-red-600 '/></button> */}
              </div>
              <div className='mt-20 flex  items-center justify-center '>
              {/* md:w-full w-36 sm:w-48 */}
                     <div className='flex w-[90%] sm:w-[80%] md:w-1/2 mb-10 items-center flex-col space-y-10'>
                           <input onChange={Handlechange} value={state.title } className=' bg-[#363535] py-1 md:py-2 outline-none border-none px-4 w-full rounded-lg' type="text" name="title" id="" placeholder='Title' />
                           <textarea onChange={Handlechange} value={state.description } className='bg-[#363535] p-3 outline-none rounded-lg w-full ' name="description" id="" rows="10" placeholder='Description'></textarea>
                           <button onClick={Handleclick} className='hover:bg-[#363535] bg-lime-400 text-white px-3 rounded-full py-2 w-full '>Save</button>
                     </div>
                     
              </div>
          </div>
    </div>
  )
}

export default UpdateNotes