import { createContext, useState,useEffect } from "react";
export const Context = createContext()
import { useNavigate } from "react-router-dom";

const ContextNoteAPI = ({children})=>{
    const [notes,setNotes] = useState([])
    const [state,setState]= useState({title:'',description:''})
    const [updatenode,setUpdatenode]= useState()
    const [search,setSearch]= useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        const check = localStorage.getItem('Note')
        if(check){
            setNotes(JSON.parse(check))
        }
    },[])
    const Handlechange = (event)=>{
        setState({...state,[event.target.name]:event.target.value})
    }
    const Handleclick = ()=>{
       
        if(state.title !=='' && state.description!==''){
            setNotes([...notes,state])
            localStorage.setItem('Note',JSON.stringify([...notes,state]))
            navigate('/')
        }
        setState({title:'',description:''})
    }

    const Update = (node)=>{
        setUpdatenode(node)
    }
    const Delete = (item)=>{
        const filtered = notes.filter(filte=>filte.title!==item.title)
        setNotes(filtered)
        localStorage.setItem('Note',JSON.stringify(filtered))

    }
    return(
        <Context.Provider value={{ notes,setNotes,Handlechange,state,Handleclick,Update,updatenode,Delete,search,setSearch}}>
            {children}
        </Context.Provider>
    )
}

export default ContextNoteAPI