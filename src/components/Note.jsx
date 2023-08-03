import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillTrashFill} from 'react-icons/bs'
const Note = ({note,index,Update,Delete}) => {
  return (
           <div  className='bg-purple-500 rounded-md text-white  p-3 '>
                <Link  className='flex flex-col gap-3'>
                <h1 className='font-bold'>{note.title}</h1>
                <p>{note.description}</p>
                <button onClick={()=>Delete(note)}  className='rounded-full  w-fit '><BsFillTrashFill className='text-red-700 '/></button>
                </Link>
           </div>
   
  )
}

export default Note