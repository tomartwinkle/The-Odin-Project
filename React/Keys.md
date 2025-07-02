# Keys in React
Why React Needs Keys
- React uses keys to identify which items in a list have changed, been added, or removed. This helps React optimize re-rendering by updating only the changed elements instead of the entire list.

# Behind the Scenes
When you render a list in React using .map(), React builds a "virtual DOM" to keep track of what the UI should look like. On every render, React:

- Compares the previous virtual DOM to the new virtual DOM.
- Uses the key to match elements between the two.
- Updates only the parts that have changed.

# Best Practices for Using Keys
- Use a unique and stable identifier from your data (like an id from a database).
- If no unique id is available, consider adding one yourself when the data is created.
- Only use the array index as a key when the list won’t change (no add/remove/reorder).

# Anti-Patterns to Avoid
- ❗ key={Math.random()} or key={crypto.randomUUID()} inside .map() is wrong
- ➤ It generates a new key on every render, causing React to unmount and remount everything.
```
// ❌ Incorrect: Generates a new key each time
<li key={crypto.randomUUID()}>{todo.task}</li>

// ✅ Correct: Use pre-generated, stable ids
<li key={todo.id}>{todo.task}</li>
```
# Good example 
```
const todos = [
  { task: "mow the yard", id: crypto.randomUUID() },
  { task: "Work on Odin Projects", id: crypto.randomUUID() },
  { task: "feed the cat", id: crypto.randomUUID() },
];

function TodoList(){
  return(
    <ul>
      {todos.map((todo)=>{
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
```
