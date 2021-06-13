# PYP / Day - 06

Table of Contents :

1. [Prerequisites](#prerequisites)
1. [Lessons topics](#lessons-topics)  
1. [Assigment](#assigment)
1. [Resources](#resources)

---
## Prerequisites

Measures to take before starting

* Install [VS Code](https://code.visualstudio.com/download) on your local machine
* Setup [Github Desktop](https://desktop.github.com/) on your local machine

---

## Lessons topics:

* ES6 - features
* Browser API: Cookies, LocalStorage, SessionStorage

---

## Assigment:


Extend the credit score app that you have written on day 5, and add functionalities that store language and theme preferences data in localStorage, dummy user data using session storage, and last but not least, user authentication token using cookies with expire date function.

```js
// lang & theme data example
var local_store = {
    lang: "AZ",
    theme: "light"
}
// user data
var session_store = {
    username: "john",
    fullname: "John Doe"
    email: "john@example.com"
}
// auth data
var cookie_store = {
    token: "supersecuretoken",
    exp_date: "1 day later"
}
```

---

## Resources:


* To read:
    - [JavaScript ES6 — write less, do more](https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/)
    - [Cookies vs Session vs Local storage - DEV Community](https://dev.to/sidbhanushali/cookies-vs-session-vs-local-storage-22ja)
    - [Cookies vs. LocalStorage: What's the difference? | by Faith Chikwekwe | The Startup](https://medium.com/swlh/cookies-vs-localstorage-whats-the-difference-d99f0eb09b44)
    - [JavaScript Cookies](https://www.w3schools.com/js/js_cookies.asp)
    - [localStorage in JavaScript: A complete guide](https://blog.logrocket.com/localstorage-javascript-complete-guide/)
    - [How and When to Apply Session Storage with JavaScript](https://www.section.io/engineering-education/how-and-when-to-apply-session-storage-with-javascript/)
   

* Docs:
    - [ECMAScript 6: New Features](http://es6-features.org/)
    - [Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API)
