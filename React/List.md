# List
We render lists in react using the map() loop.
```
functio MyCars(){
  const cars=["ferrari" , "porsche" , "BMW"];
return (
  <h1> My cars : </h1>
  <ul>
  {cars.map((car)=><li>I am a {car}</li>)}
</ul>
);}
```
# Keys 
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
<br>
Keys must be unique among siblings, but they don't have to be unique across the entire application.
<br>
Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.
<br>
```
functio MyCars(){
  const cars[
    {id:1000, brand:"Ferrari"},
    {id:1001, brand:"BMW"},
    {id:1002, brand:"mustang"}
];
return(
  <>
    <ul>
    {cars.map((car)=><li key={car.id}>I am a {car.brand}</li>)}
    </ul>
  </>
);}

createRoot(document.getElementById('root')).render(
  <MyCars />
);
```
