function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Shashank" };

// Using call: passes arguments individually
greet.call(person, "Hello", "!"); // Output: Hello, Shashank!

// Using apply: passes arguments as an array
greet.apply(person, ["Hi", "!!"]); // Output: Hi, Shashank!!

// Using bind: creates a new function with `this` bound
const greetShashank = greet.bind(person);
greetShashank("Hey", "..."); // Output: Hey, Shashank...
