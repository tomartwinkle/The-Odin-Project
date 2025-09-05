```
function Myform(){
  return(
  <form>
    <label>Enter Name :
    <input type="text"/>
    </label>
  </form>
);
}
createRoot(document.getElementById('root')).render(
  <Myform/>
);

```
- This will work as normal, the form will submit and the page will refresh.

- But this is generally not what we want to happen in React.

- We want to prevent this default behavior and let React control the form.
# Using useState hook to manage input 
```
import {useState,useEffect} from 'react'
import {createRoot} from 'react-dom/client'
function Myform(){
  const [name,setName]=useState("");
  function handleChange(e){
    setName(e.target.value);
}
return(
  <form>
    <label> Enter name :
    <input type="text" value={name} onChange={handleChange}/>
    </label>
<p>Current value: {name}</p>
</form>
);
}
createRoot(document.getElementById('root')).render(
  <MyForm />
);
```
# Submit handling 
```
function handleSubmit(e){
  e.preventDefault();
  alert(name);
}

//in the form tag add the attribute onSubmit={handleSubmit}

```
