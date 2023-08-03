import { createContext, useState } from "react";
export const Context = createContext()
import { useNavigate } from "react-router-dom";

const ContextNoteAPI = ({children})=>{
    const [notes,setNotes] = useState([])
    const [state,setState]= useState({title:'',description:''})
    const [updatenode,setUpdatenode]= useState()
    const [search,setSearch]= useState('')
    console.log(updatenode)
    const navigate = useNavigate()
    const Handlechange = (event)=>{
        setState({...state,[event.target.name]:event.target.value})
    }
    const Handleclick = ()=>{
        if(state.title !=='' && state.description!==''){
            setNotes([...notes,state])
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
    }
    return(
        <Context.Provider value={{ notes,setNotes,Handlechange,state,Handleclick,Update,updatenode,Delete,search,setSearch}}>
            {children}
        </Context.Provider>
    )
}

export default ContextNoteAPI