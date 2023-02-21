import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const form = document.querySelector('#signup-form');
const message = document.querySelector('#message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  message.innerHTML = ''; // Remove older error messages if there are any

  // Get input values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const gender = document.querySelector('#gender').value;
  const phoneNumber = document.querySelector('#phoneNumber').value;
  const password = document.querySelector('#password').value;

  // Validate input values
  if (!name || !email || !gender || !phoneNumber || !password) {
    message.innerHTML = '<p class="error">All fields are mandatory.</p>';
  } else if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
    message.innerHTML = '<p class="error">Name is not alphanumeric.</p>';
  } else if (!/@/.test(email)) {
    message.innerHTML = '<p class="error">Email must contain @.</p>';
  } else if (!['male', 'female', 'other'].includes(gender)) {
    message.innerHTML = '<p class="error">Please identify as male, female or other.</p>';
  } else if (!/^[0-9]+$/.test(phoneNumber)) {
    message.innerHTML = '<p class="error">Phone Number must contain only numbers.</p>';
  } else if (password.length < 6) {
    message.innerHTML = '<p class="error">Password must contain at least 6 letters.</p>';
  } else {
    // Extract username from email and display welcome message
    const username = email.split('@')[0];
    message.innerHTML = `<p>Hello ${username}.</p>`;
  }
});


ReactDOM.render(<App />, document.getElementById("root"));