const deckData = [
  {
    id: 1,
    title: "JavaScript Essentials",
    description: "Brush up on JS basics and ES6 concepts.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    flashcards: [
      {
        question: "What is a closure?",
        answer:
          "A function that remembers its lexical scope even when executed outside that scope.",
      },
      {
        question: "Difference between var, let and const?",
        answer:
          "var is function scoped, let and const are block scoped; const cannot be reassigned.",
      },
      {
        question: "What is hoisting?",
        answer:
          "JavaScript's default behavior of moving declarations to the top of the current scope.",
      },
      {
        question: "What does 'this' refer to?",
        answer:
          "'this' refers to the object that is executing the current function.",
      },
      {
        question: "What is the difference between == and ===?",
        answer:
          "== compares values after type coercion; === compares both value and type.",
      },
      {
        question: "What is an arrow function?",
        answer:
          "A shorter syntax for function expressions that doesn't have its own 'this'.",
      },
      {
        question: "What is event bubbling?",
        answer:
          "When an event propagates from the child element up to its parents.",
      },
      {
        question: "What are Promises?",
        answer:
          "Objects representing the eventual completion or failure of an asynchronous operation.",
      },
      {
        question: "What is the use of 'async' and 'await'?",
        answer:
          "To write asynchronous code that looks synchronous, handling Promises more easily.",
      },
      {
        question: "What is a JavaScript prototype?",
        answer:
          "An object from which other objects inherit properties and methods.",
      },
    ],
  },
  {
    id: 2,
    title: "Python Basics",
    description: "Learn data types, loops, and functions.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    flashcards: [
      {
        question: "How do you create a list?",
        answer: "Using square brackets, e.g. [1, 2, 3].",
      },
      {
        question: "What is a tuple?",
        answer: "An immutable ordered collection of elements.",
      },
      {
        question: "How do you define a function?",
        answer: "Using the 'def' keyword.",
      },
      {
        question: "What are Python's basic data types?",
        answer: "int, float, str, bool, list, tuple, dict, set.",
      },
      {
        question: "What is a dictionary?",
        answer: "A collection of key-value pairs.",
      },
      {
        question: "How do you write a for loop?",
        answer: "for item in iterable: (do something)",
      },
      {
        question: "What is a lambda function?",
        answer: "An anonymous function defined with 'lambda' keyword.",
      },
      {
        question: "What is list comprehension?",
        answer:
          "A concise way to create lists using for loops inside brackets.",
      },
      {
        question: "What is the difference between 'is' and '=='?",
        answer: "'is' checks identity; '==' checks equality of values.",
      },
      {
        question: "How do you handle exceptions?",
        answer: "Using try-except blocks.",
      },
    ],
  },
  {
    id: 3,
    title: "HTML Tags",
    description: "Master common HTML elements and structure.",
    image: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
    flashcards: [
      {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language.",
      },
      {
        question: "What is the purpose of the <head> tag?",
        answer: "Contains meta-information about the document.",
      },
      {
        question: "How do you create a hyperlink?",
        answer: "Using the <a> tag with href attribute.",
      },
      { question: "What tag is used for images?", answer: "<img> tag." },
      {
        question: "How do you create a list?",
        answer: "<ul> for unordered, <ol> for ordered lists.",
      },
      {
        question: "What does the <div> tag do?",
        answer: "Defines a division or section in an HTML document.",
      },
      {
        question: "What is a semantic tag?",
        answer:
          "Tags that clearly describe their meaning, like <article>, <section>.",
      },
      {
        question: "How to make a table?",
        answer: "Using <table>, <tr>, <td>, and <th> tags.",
      },
      {
        question: "What does the <form> tag do?",
        answer: "Creates an HTML form for user input.",
      },
      {
        question: "How do you add comments in HTML?",
        answer: "<!-- comment goes here -->.",
      },
    ],
  },
  {
    id: 4,
    title: "CSS Fundamentals",
    description: "Selectors, Flexbox, and Box Model essentials.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    flashcards: [
      {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets.",
      },
      {
        question: "What is the Box Model?",
        answer: "Content, padding, border, and margin of an element.",
      },
      {
        question: "What are selectors?",
        answer: "Patterns used to select elements to style.",
      },
      {
        question: "How to center a div with Flexbox?",
        answer: "Use display:flex; justify-content:center; align-items:center;",
      },
      {
        question: "What is the difference between 'class' and 'id' selectors?",
        answer: "Class can be reused; id is unique.",
      },
      {
        question: "What is specificity in CSS?",
        answer: "Rules to determine which styles apply when conflicts occur.",
      },
      {
        question: "How do you include CSS in HTML?",
        answer: "Inline, internal (style tag), or external (link tag).",
      },
      {
        question: "What is a pseudo-class?",
        answer: "Defines a special state of an element, e.g. :hover.",
      },
      {
        question: "What is z-index?",
        answer: "Controls the vertical stacking order of elements.",
      },
      {
        question: "What are media queries?",
        answer: "CSS technique for responsive design based on screen size.",
      },
    ],
  },
  {
    id: 5,
    title: "React Basics",
    description: "JSX, Components, Props, and Hooks explained.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    flashcards: [
      {
        question: "What is JSX?",
        answer: "JavaScript XML, syntax extension to write HTML in React.",
      },
      {
        question: "What is a component?",
        answer: "Reusable piece of UI in React.",
      },
      {
        question: "What are props?",
        answer: "Properties passed to components to customize them.",
      },
      {
        question: "What is state?",
        answer: "A component’s local data that can change over time.",
      },
      {
        question: "What is a hook?",
        answer:
          "Special functions like useState, useEffect to use React features.",
      },
      {
        question: "What does useState do?",
        answer: "Adds state to a functional component.",
      },
      {
        question: "What is the virtual DOM?",
        answer: "Lightweight copy of the real DOM used for efficient updates.",
      },
      {
        question: "How do you handle events in React?",
        answer: "Using camelCase props like onClick, onChange.",
      },
      {
        question: "What is the purpose of useEffect?",
        answer: "To perform side effects in function components.",
      },
      {
        question: "How do you pass data from parent to child?",
        answer: "Using props.",
      },
    ],
  },
  {
    id: 6,
    title: "Data Structures",
    description: "Arrays, Stacks, Queues, and Linked Lists.",
    image: "https://cdn-icons-png.flaticon.com/512/3039/3039381.png",
    flashcards: [
      {
        question: "What is an array?",
        answer: "A collection of elements identified by index.",
      },
      {
        question: "What is a stack?",
        answer: "LIFO data structure, last-in-first-out.",
      },
      {
        question: "What is a queue?",
        answer: "FIFO data structure, first-in-first-out.",
      },
      {
        question: "What is a linked list?",
        answer: "A list where each element points to the next.",
      },
      {
        question: "Difference between array and linked list?",
        answer: "Array has fixed size; linked list can grow dynamically.",
      },
      {
        question: "What is a hash table?",
        answer: "Data structure that maps keys to values.",
      },
      {
        question: "What is a binary tree?",
        answer: "A tree data structure with up to two children per node.",
      },
      {
        question: "What is a graph?",
        answer: "A collection of nodes connected by edges.",
      },
      {
        question: "What is a queue used for?",
        answer: "Scheduling tasks, buffering data, BFS traversal.",
      },
      {
        question:
          "What is the time complexity of accessing an element in an array?",
        answer: "O(1) - constant time.",
      },
    ],
  },
];

export default deckData;
