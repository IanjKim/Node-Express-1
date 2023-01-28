### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Callbacks, Promises and Async/Await

- What is a Promise?

Promises: an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- What are the differences between an async function and a regular function?

A regular function is synchronous, meaning that it runs in a blocking manner. It will wait for one task to complete before moving on to the next one.

An async function, on the other hand, is asynchronous, meaning that it can run multiple tasks simultaneously. It uses Promises to handle the results of asynchronous operations, and the await keyword to pause the execution of the async function until a Promise is resolved.

- What is the difference between Node.js and Express.js?

In short, Node.js is a JavaScript runtime that allows you to run JavaScript on the server side, while Express.js is a web framework for Node.js that makes it easy to create web applications and APIs. Node.js provides the environment for running JavaScript on the server side and Express.js gives the structure and features to build web applications and APIs.

- What is the error-first callback pattern?

The error-first callback pattern is a convention used in Node.js for passing errors and data between asynchronous functions. It is also known as "error-back" or "errback" pattern.

- What is middleware?

Middleware is a function or set of functions that are executed between an incoming request and the corresponding response in a web application. It is a way to add additional functionality or behavior to an application by "wrapping" the request and response objects with additional functionality.

- What does the `next` function do?

The next() function is used to pass control to the next middleware function in the chain. When a middleware function is executed, it can either complete the request-response cycle by sending a response to the client, or it can pass control to the next middleware function in the chain by calling the next() function.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

- Making 3 API calls sequentially can make the overall performance of the function to suffer
- Code does not have a clear structure
- Naming of the variables are way too low functioning. It is better to make a variable grabbing all the users instead of one at a time
- Errors handling: The function does not handle errors that may occur while fetching the data from the API.
- Hard coding: The function is hard coding the URLs of the API calls.
- It's better to use the fetch method rather that getJSON in this instance.