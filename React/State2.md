# How to structure state
“Don’t put in state what you can calculate from props or other state.”

That means:
Only store essential values in state — stuff that changes over time and can’t be derived from something else.

❌ Example of unnecessary state:
```
const [fullName, setFullName] = useState(firstName + " " + lastName);
```
You can calculate fullName using firstName and lastName, so no need to store it in state.
🚫 2. State Should NOT Be Mutated
Mutation means directly changing the object or array stored in state.

❌ Bad (mutating state directly):
```
person.age = person.age + 1;
setPerson(person);
```
This won’t reliably trigger a re-render and might cause bugs.

✅ Good (use a new object):
```
const newPerson = { ...person, age: person.age + 1 };
setPerson(newPerson);
```
You’re copying the old object

And changing only what’s necessary

React will now detect the change and rerender the UI

🧩 Why This Matters: Objects & Arrays in State
React only rerenders if the reference to the object/array changes

If you mutate the existing object (same reference), React might skip rerendering

Always use a new object/array when calling setState.

🕒 3. State Updates Are Asynchronous
🤯 What this means:
React doesn’t instantly update the state when you call setState.

Instead, it schedules the update and applies it during the next render.

Example:
```
const handleIncreaseAge = () => {
  console.log("Before:", person);
  setPerson({ ...person, age: person.age + 1 });
  console.log("After:", person); // 😮 still shows old value!
};
```
Both logs will show the old state

Because the component hasn’t rerendered yet

🧠 State Is a Snapshot
During a render, state is frozen (snapshot)

setState schedules a rerender — it doesn’t update the variable in the moment

🌀 4. Infinite Loop Example
```
function Component() {
  const [count, setCount] = useState(0);
  setCount(count + 1); // ❌ infinite loop!
  return <h1>{count}</h1>;
}
```
Every render triggers a setState

Every setState triggers a rerender

Which triggers another setState

🔁 = infinite loop

React tries to protect you, but this kind of pattern is a big red flag.

🔁 5. State Updater Functions
❌ This doesn’t work as you expect:
```
setPerson({ ...person, age: person.age + 1 });
setPerson({ ...person, age: person.age + 1 });
```
Both calls are using the same snapshot of person. Result: it only increases by 1.

✅ Correct way using updater function:
```
setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
```
This uses the latest version of state

Age will correctly increase by 2 now

💡 Use updater functions when your next state depends on the previous state.

🚀 React Batches Updates
React is smart. If you call setState multiple times in a row:
```
setCount(count + 1);
setCount(count + 1);
```
React batches these updates to avoid multiple rerenders.
✅ So the component usually rerenders only once.

Try logging in your app — you'll see it.

🧮 6. Controlled Components
Some HTML elements (like <input>) manage their own internal state.

Example:
```
<input type="text" />
```
You type something → it just works.

But in React, we often want control over what’s in that input box.

✅ Controlled Input:
```
function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```
Now React is in charge of the input

Every keystroke updates the state

And the input value comes from state

Why this matters:
You can read the input value any time from state

You can reset it, validate it, or modify it easily

It makes your app predictable and consistent
