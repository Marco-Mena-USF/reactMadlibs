What is React? When and why would you use it?
React is like the rockstar of web development. It's a cool JavaScript library for building awesome user interfaces. We use it when we want our web apps to be super interactive and dynamic without getting tangled up in a mess of code. It's all about breaking things down into small, reusable parts called components.

What is Babel?
Babel is like the translator for our code. It takes the fancy JavaScript we write, especially the cool new stuff like arrow functions and JSX, and turns it into a language that older browsers can understand. It helps us stay modern without leaving anyone behind.

What is JSX?
JSX is like the spicy syntax in React. Instead of writing boring old JavaScript to describe our UI, we get to use this HTML-like syntax right in our JavaScript. It's like magic – makes our code look cleaner and more readable.

How is a Component created in React?
Creating a component is like setting up a mini web page. You can either make a class or a function, and then you throw in a render method or just return your UI. It's all about building blocks – make small parts, put them together, and you've got your cool website.

What are some differences between state and props?

State: It's like the memory of a component. You keep track of data that might change, and React takes care of updating the UI whenever that data changes.
Props: It's like passing notes between components. You can send data from one component to another, and it's a great way for them to talk and share info.
What does "downward data flow" refer to in React?
It's like a rule in React world. Data flows like a waterfall – from the parent component down to its children. Changes start at the top and cascade down, keeping things organized and predictable.

What is a controlled component?
It's like having control over your input fields. A controlled component's value is controlled by the state, making it easy to manage and update.

What is an uncontrolled component?
It's like setting something free. Uncontrolled components don't rely on state for their values. They just do their own thing, a bit wild and free.

What is the purpose of the key prop when rendering a list of components?
The key prop is like the ID card for each item in a list. It helps React keep track of what's what when you're updating or deleting things. Keeps everything in order.

Why is using an array index a poor choice for a key prop when rendering a list of components?
It's like trying to remember someone by their seat number – not a good idea. Array indexes can cause trouble when you add or remove items from the list. React likes unique keys to keep things smooth.

Describe useEffect. What use cases is it used for in React components?
useEffect is like the lifesaver for side effects in React. It's where you handle things like fetching data, subscriptions, or any action that happens outside of the regular component flow. It's the go-to for keeping things tidy.

What does useRef do? Does a change to a ref value cause a rerender of a component?
useRef is like having a sticky note that survives component rerenders. It helps us hold onto values between renders, and nope, changing a ref doesn't cause a rerender. It's like a ninja in the component world – silent and efficient.

When would you use a ref? When wouldn't you use one?
You'd use a ref when you need to grab or track something specific in the DOM, like focusing on an input. But don't use it for everything – only when you really need that direct connection to the DOM.

What is a custom hook in React? When would you want to write one?
Custom hooks are like shortcuts for your code. When you find yourself doing the same thing in different components, you can bundle it up into a custom hook. It's like creating your own superpower that you can reuse wherever you need it.