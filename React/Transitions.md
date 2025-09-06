# Transitions 
The useTransition hook helps keep react app responsive during heavy updates <br>
It lets you mark some state updates as "non-urgent", allowing other, more urgent updates to happen first.
```
import {useState,useTransition} from 'react'
function SearchBar(){
  const [text,setText]=useState('');
  const [results,setResults]=useState('');
  const [isPending,startTransition] = useTransition();

  const handleChange=(e)=>{
  setText(e.target.value);
  startTransition(()=>{
  setResult(e.target.value);
  });
};

return(
  <div>
    <input value={text} onChange={handleChange}/>
    {isPending ? (<p>Loading</p>) : ( <p>Search results for: {results}</p>) }
    </div>
  );
}

```
Real world Example : a more practical search feature with slow search results 
```
import {useState,useTransition} from 'react'
function searchResults({query}){
  const items=[];
  if(query){
  for(let i=0;i<1000;i++){
    items.push(<li key={i}>Result for {query} - {i} </li>);
    }
}
return <ul>{items}</ul>
}

function App(){
  const [input,setInput]=useState('');
  const [query,setQuery]=useState('');
  const [isPending,startTransition]=useState();

  const handleChange=(e)=>{
    setInput(e.target.value);
    startTransition(()=>{
    setQuery(e.target.value);
  });
  };

return(
  <div>
    <input type="text" value={input} onChange={handleChange} placeholder="Type to search..." />
    {isPending&&<p>Loading Results...</p>}
    <searchResults= query={query}/>
  </div>
);
}
```

