# Transitions vs. Animations

| Feature         | Transitions                                               | Animations                                             |
| --------------- | --------------------------------------------------------- | ------------------------------------------------------ |
| **Trigger**     | Needs a trigger (e.g., `:hover`, JavaScript class toggle) | Can run automatically when page loads                  |
| **Looping**     | Not designed for looping                                  | Built for looping (`infinite`, `alternate`, etc.)      |
| **Flexibility** | Limited to simple style changes                           | Can change multiple properties at multiple stages      |
| **Use case**    | Simple UI effects (like button hover)                     | Complex sequences (like bouncing balls, loaders, etc.) |


- Tip: Use transitions for simple one-time changes; use animations for anything more dynamic or multi-step.

# Animation Properties (Configuration Stage)
```
#ball {
  animation-duration: 2s;
  animation-name: change-color;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```
- animation-duration: Total time for one cycle (e.g., 2s)
- animation-name: Links to the @keyframes block
- animation-iteration-count: Number of cycles (infinite, 1, 2, etc.)
- animation-direction: Repeats direction or alternates (alternate makes it reverse smoothly)

# Defining the Keyframes
```
@keyframes change-color {
  from {
    background-color: red;
  }
  to {
    background-color: green;
  }
}
```

(from / to = 0% / 100%)
<br>
You can also use custom percentages to define intermediate steps.

# Example with Multiple Keyframes
```
#ball {
  background-color: red;
  animation: 2s change-color infinite alternate;
}

@keyframes change-color {
  from {
    background-color: red;
  }
  50% {
    transform: scale(2);
    background-color: blue;
  }
  to {
    background-color: green;
  }
}
```
- At 0%: Red
- At 50%: Scales to 2x and becomes blue
- At 100%: Becomes green
 Result: A ball that changes color and size continuously in a loop.

# Final Thoughts
Animations let you sequence multiple property changes over time.<br>
They offer fine control and creativity over motion and interactivity<br>
Use shorthand notation like:
```
animation: 2s change-color infinite alternate;
```
With animations and @keyframes, you can build anything from subtle UI interactions to eye-catching loaders and transitions.

