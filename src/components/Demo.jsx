import React,{useContext, useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {GrFormAdd} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { Context } from '../contextAPI/ContextNote'
import Note from './Note'
const Demo = () => {

const {notes,setNotes,Update,updatenode,Delete,search,setSearch} = useContext(Context)
return (
    <div className='bg-black text-white font-Raleway min-h-[100vh] '>
          <div className='md:w-[80%] m-auto w-[90%]   relative   pt-10 '>
              <div className='flex justify-between'>
                  <h1 className='md:text-4xl sm:text-2xl text-xl '>My Notes</h1>
                  <div className='max-w-3xl relative '>
                        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='md:w-full w-32 sm:w-48 bg-[#363535] py-1 md:py-2 outline-none border-none px-10 text-sm rounded-full' type="text" name="" id="" placeholder='Search' />
                        <BiSearch className='absolute left-2 top-[1rem] md:top-5 -translate-y-1/2 text-xl  sm:text-2xl text-[#d7d6d6]'/>
                  </div>
              </div>
              <div className='  py-10 grid  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                  { 
                    notes?.filter(item=>
                        {
                        if(search==''){
                              return item
                        }else if (item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                              return item    
                        }
                        })
                    .map((note,index)=>(
                           <Note note={note} key={note.title} index={index} Update={Update} Delete={Delete}/>
                    ))
                  }
                  {
                        notes=='' && 
                        <div className='min-h-[60vh] flex items-center justify-center  min-w-[80vw]'>
                              <h2 className='text-2xl text-red-500'>Your Notebook is empty</h2>
                        </div>
                  }
              </div>
              <button className='bg-white z-10 fixed bottom-4 text-[#d7d6d6] right-10'>
                    <Link to={'/update'}>
                         <GrFormAdd className=' text-xl sm:text-2xl md:text-4xl '/>  
                    </Link>
              </button>
          </div>
    </div>
  )
}

export default Demo