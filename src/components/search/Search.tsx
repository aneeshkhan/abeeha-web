import {useState, useEffect} from 'react';

const Search = ()=>{
    const [input, setInput] = useState("")
    const [search, setSearch] = useState([])
    const [showResult, setShowResult] = useState(false)

    const [cachedResult, setCachedResult] = useState({})

    useEffect(()=>{

        const timer = setTimeout(()=>{
           getData()
        },400)
        
        
        return ()=>{
            clearTimeout(timer)
        }
    },[input]);


    const getData = async()=>{
        if(cachedResult[input]){
            setSearch(cachedResult[input])
            return
        }
        const response = await fetch("https://dummyjson.com/recipes/search?q="+input);
        const data = await response.json();
        console.log(data.recipes)
        setSearch(data.recipes )
        setCachedResult({...cachedResult, [input]: data.recipes})

    }

    return (
        <>
        <h1>Search Bar </h1>
        <div className="search">
            <div>
              <input type="text" value={input} onFocus={()=>setShowResult(true)} onBlur={()=>setShowResult(false)} onChange={(e)=>{setInput(e.target.value)}}/>            
            
              
                {showResult && 
                    <div>
                        {search.map((item)=>(
                            <span className='result' key={item.id}>
                                {item.name}
                            </span>
                        ))}
                    </div>
                }              
               
            </div>              
        </div>
        </>
        
    )
}

export default Search