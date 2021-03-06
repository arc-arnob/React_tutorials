import axios from 'axios'
import React, {useState, useEffect} from 'react'
const Search = () => {
    const [term, setTerm] = useState('welcome')
    const [results, setResults] = useState([])

    console.log(results)
    //Liek lifecycle methof of class components
    useEffect(() =>{
        const search = async () =>{
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search)

        };
        const timeoutId = setTimeout(() =>{ 
            if(term) {
                search();
            }
        },1000);
        //cleanup function, useEffect retunrs only this type.
        return() =>{
            clearTimeout(timeoutId)
        }
    }, [term]) //[]-> initial render, ...->initial nad rerender, [data] --> initial, rerender,data change

    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid} className='item'>
                <div className="right floated content">
                    <a 
                    className='ui button'
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Read more
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                        
                    
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    className="input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}>

                    </input>
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
        
    )
}

export default Search